<template>
	<div class="poster">
		<img
			v-if="data.poster_path"
			class="poster"
			:src="MOVIE_DB_IMAGE_URL.medium + data.poster_path"
			alt="movie-poster"
			@error="e => ((<HTMLImageElement>e.target).style.display = 'none')"
		/>
	</div>
	<div class="original_title" :title="(data.title as string)">
		{{ data.title }}
	</div>
	<div class="release_year">( {{ data.release_date.split("-")[0] }} )</div>
</template>

<script lang="ts" setup>
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";

interface IMovieItem {
	poster_path: String;
	title: String;
	release_date: String;
}

defineProps<{
	data: IMovieItem;
}>();
</script>

<style lang="less" scoped>
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
</style>
