<template>
	<div v-if="isLoading" class="loading">
		<Loading />
	</div>

	<div v-else class="movie-detail">
		<div class="movie-detail-backdrop" v-if="MovieDetailData.backdrop_path">
			<img :src="getBackdropSrc(MovieDetailData.backdrop_path)" />
		</div>
		<div style="padding: 0.75rem 1rem">
			<MovieDetail :data="MovieDetailData" />
		</div>

		<div style="padding: 0.75rem 1rem">
			<MovieCredits :data="MovieCreditsData" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";
import { getMovie, getMovieCredits, getMovieReviews } from "@/apis";
// import dayjs from "dayjs";
import MovieDetail from "@/components/MovieDetail.vue";
import MovieCredits from "@/components/MovieCredits.vue";
import Loading from "@/components/Loading.vue";

// import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
const getBackdropSrc = (path: string) => MOVIE_DB_IMAGE_URL.large + path;

const props = defineProps(["movieId"]);
const isLoading = ref<Boolean>(false);

const MovieDetailData = ref<any>({});
const MovieCreditsData = ref<any>({});
const MovieReviews = ref<any>({});

onBeforeMount(async () => {
	window.scrollTo(0, 0);
	isLoading.value = true;
	const [detail, credits, reviews] = await Promise.all([
		getMovie(props.movieId),
		getMovieCredits(props.movieId),
		getMovieReviews(props.movieId),
	]);
	MovieDetailData.value = detail;
	MovieCreditsData.value = credits;
	MovieReviews.value = reviews;
	isLoading.value = false;
});
</script>

<style lang="less" scoped>
.loading {
	height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: #ccc;
}

.movie-detail {
	&-backdrop {
		width: 100%;
		position: relative;
		img {
			width: 100%;
		}
		&::after {
			content: "";
			position: absolute;
			height: 100%;
			width: 100%;
			left: 0;
			background: linear-gradient(0deg, #15141f, #15141f09);
		}
	}

	.movie-reviews {
		padding: 0.75rem 1rem;
		&-title {
			color: #fff;
			font-size: 1.125rem;
			margin-bottom: 0.5rem;
		}
		.movie-review-item {
			margin-bottom: 1rem;
			.created-at {
				color: #999;
			}
			.content {
				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: 3;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
			}
		}
	}
}
</style>
