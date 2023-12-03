<template>
	<div class="poster">
		<img
			v-if="data.poster_path"
			:src="MOVIE_DB_IMAGE_URL.medium + data.poster_path"
			alt="movie-poster"
			@error="e => ((<HTMLImageElement>e.target).style.display = 'none')"
		/>
	</div>
	<div class="original_title" :title="data.title">
		{{ data.title }}
	</div>
	<div class="release_year">( {{ data.release_date.split("-")[0] }} )</div>
</template>

<script lang="ts" setup>
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";

interface IMovieItem {
	poster_path: string;
	title: string;
	release_date: string;
}

defineProps<{
	data: IMovieItem;
}>();
</script>

<style lang="less" scoped>
.poster {
	display: flex;
	align-items: center;
	border-radius: 0.5rem;
	overflow: hidden;
	position: relative;
	img {
		width: 100%;
	}
	&::after {
		content: "no poster";
		font-size: 1.375rem;
		text-align: center;
		width: 100%;
		font-style: oblique;
		text-transform: capitalize;
		padding-bottom: 100%;
		position: absolute;
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
</style>
