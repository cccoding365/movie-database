<template>
	<div class="movie-container">
		<router-link
			:to="`movie/${item.id}`"
			class="movie-card"
			v-for="item in MovieList.results"
		>
			<img
				class="poster"
				:src="MOVIE_DB_IMAGE_URL.medium + item.poster_path"
			/>
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
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";

import nowPlaying from "@/mocks/movie_now-playing.json";
import popular from "@/mocks/movie_popular.json";
import topRated from "@/mocks/movie_top-rated.json";
import upcoming from "@/mocks/movie_upcoming.json";

import { onMounted, ref } from "vue";

let MovieList = ref<{
	page: Number;
	results: any[];
	total_pages: Number;
	total_results: Number;
}>({
	page: 0,
	results: [],
	total_pages: 0,
	total_results: 0,
});

const fetchMovieList = (e: string) => {
	const movieListMap = new Map([
		["now_playing", nowPlaying],
		["popular", popular],
		["top_rated", topRated],
		["upcoming", upcoming],
	]);

	MovieList.value = movieListMap.get(e)!;
};

onMounted(() => {
	fetchMovieList("now_playing");
});

defineExpose({ fetchMovieList });
</script>

<style lang="less" scoped>
.movie-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.75rem;
	animation: fadeIn 0.5s forwards;

	.movie-card {
		width: 8.125rem;
		font-size: 0.75rem;
		transition: transform 0.2s cubic-bezier(0.34, 2, 0.6, 1),
			box-shadow 0.1s ease;
		&:hover {
			box-shadow: 0px 12px 19px -7px rgba(0, 0, 0, 0.3);
			transform: translateY(-10px);
		}

		.poster {
			width: 100%;
			border-radius: 0.5rem;
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
