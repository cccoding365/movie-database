<template>
	<div class="movie-container">
		<router-link
			:to="`movie/${item.id}`"
			class="movie-card"
			v-for="item in MovieData.results"
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
import MovieData from "@/apis/fake-data.json";
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";

const fetchMovieList = (e: String) => {
	console.log("fetchMovieList", e);
};

defineExpose({ fetchMovieList });
</script>

<style lang="less" scoped>
.movie-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	row-gap: 2rem;
	column-gap: 1.5rem;

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
