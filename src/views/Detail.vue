<template>
	<div v-if="isLoading" class="loading">Movie detial is loading...</div>

	<div v-else class="movie-detail">
		<div class="movie-detail-backdrop" v-if="MovieDetailData.backdrop_path">
			<img
				:src="MOVIE_DB_IMAGE_URL.large + MovieDetailData.backdrop_path"
			/>
		</div>
		<div style="padding: 0.75rem 1rem">
			<MovieDetail :data="MovieDetailData" />
		</div>

		<div class="movie-reviews">
			<div class="movie-reviews-title">Reviews</div>
			<div class="movie-review-item" v-for="item in MovieReviews.results">
				<div class="author">{{ item.author }}</div>
				<div class="created-at">
					{{ dayjs(item.created_at).format("YYYY-MM-DD HH:mm:ss") }}
				</div>
				<div class="content">{{ item.content }}</div>
			</div>
		</div>

		<div class="movie-redits">
			<div class="movie-redits-title">Cast & Crew</div>
			<div class="movie-redits-cast">
				<div
					class="movie-redits-cast-item"
					v-for="item in MovieCredits.cast"
				>
					<div class="movie-redits-cast-profile">
						<img
							v-if="item.profile_path"
							class="movie-redits-cast-profile"
							:src="MOVIE_DB_IMAGE_URL.small + item.profile_path"
							alt="cast-profile"
							@error="e => ((<HTMLImageElement>e.target).style.display = 'none')"
						/>
					</div>

					<div class="name">{{ item.name }}</div>
					<div class="character">{{ item.character }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";
import { getMovie, getMovieCredits, getMovieReviews } from "@/apis";
import dayjs from "dayjs";
import MovieDetail from "@/components/MovieDetail.vue";

const props = defineProps(["movieId"]);
const isLoading = ref<Boolean>(false);

const MovieDetailData = ref<any>({});
const MovieCredits = ref<any>({});
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
	MovieCredits.value = credits;
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

	.movie-redits {
		padding: 0.75rem 1rem;
		&-title {
			color: #fff;
			font-size: 1.125rem;
			margin-bottom: 0.5rem;
		}
		&-cast {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 1rem;
			&-item {
				display: flex;
				flex-direction: column;
				width: 6.25rem;
			}
			&-profile {
				border-radius: 0.5rem;
				display: flex;
				img {
					width: 100%;
				}
				&::after {
					content: "no photo";
					font-size: 1.5rem;
					font-style: oblique;
					text-transform: capitalize;
					padding-top: 100%;
					color: #999;
					font-weight: bold;
					z-index: -1;
				}
			}
			.name {
				font-size: 1rem;
				margin: 0.5rem 0;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.character {
				color: #999;
				font-size: 0.75rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
}
</style>
