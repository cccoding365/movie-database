<template>
	<MovieMenu v-show="isShowMovieMenu" @switch-type="fetchMovieList($event)" />

	<div class="movie-container">
		<router-link
			:to="`movie/${item.id}`"
			class="movie-card"
			v-for="item in MovieList.results"
		>
			<div class="poster">
				<img
					v-if="item.poster_path"
					class="poster"
					:src="MOVIE_DB_IMAGE_URL.medium + item.poster_path"
					alt="movie-poster"
					@error="e => ((<HTMLImageElement>e.target).style.display = 'none')"
				/>
			</div>
			<div class="original_title" :title="item.title">
				{{ item.title }}
			</div>
			<div class="release_year">
				( {{ item.release_date.split("-")[0] }} )
			</div>
		</router-link>
	</div>
</template>

<script lang="ts" setup>
import MovieMenu from "@/components/MovieMenu.vue";
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";
import { MovieFilter } from "@/types/payload";
import { IMovieList } from "@/types/response";

import { getMovies } from "@/apis/mock";
import { onMounted, ref } from "vue";
import { useScroll, useEventListener } from "@vueuse/core";

const isShowMovieMenu = ref<Boolean>(true);

let MovieList = ref<IMovieList>({ results: [] });

const fetchMovieList = async (filter: MovieFilter = "now_playing") => {
	MovieList.value = await getMovies({ filter, page: 1 });
};

useEventListener(window, "scroll", async () => {
	const { arrivedState } = useScroll(window, {
		behavior: "smooth",
	});

	if (arrivedState.bottom) {
		MovieList.value.results.push(
			...(await getMovies({ filter: "popular", page: 1 })).results,
		);
	}
});

onMounted(() => {
	fetchMovieList();
});

// defineExpose({ fetchMovieList });
</script>

<style lang="less" scoped>
.movie-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.75rem;
	animation: fadeIn 0.5s forwards;

	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 8.125rem;
		font-size: 0.75rem;
		transition: transform 0.2s cubic-bezier(0.34, 2, 0.6, 1),
			box-shadow 0.1s ease;
		&:hover {
			box-shadow: 0px 12px 19px -7px rgba(0, 0, 0, 0.3);
			transform: translateY(-10px);
		}

		.poster {
			display: flex;
			border-radius: 0.5rem;
			img {
				width: 100%;
			}
			&::after {
				content: "no poster";
				flex: 1;
				font-size: 1.375rem;
				font-style: oblique;
				text-transform: capitalize;
				padding-top: 100%;
				color: #999;
				font-weight: bold;
				z-index: -1;
			}
		}
		.original_title {
			text-align: left;
			line-height: 1rem;
			margin: 0.25rem 0;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.release_year {
			color: #bcbcbc;
		}
	}
}
</style>
