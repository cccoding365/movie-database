<template>
	<div class="poster">
		<img
			v-if="data.poster_path"
			:src="getPosterImgSrc(data.poster_path)"
			@error="onImagError"
		/>
	</div>
	<div class="vote-average" v-if="data.vote_average > 1">
		{{ data.vote_average.toFixed(1) }}
	</div>
	<div class="title" :title="data.title">{{ data.title }}</div>
	<div class="release-year">{{ renderReleaseYear(data.release_date) }}</div>
</template>

<script lang="ts" setup>
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";

interface IMovieData {
	poster_path: string;
	title: string;
	release_date: string;
	vote_average: number;
}

defineProps<{
	data: IMovieData;
}>();

const getPosterImgSrc = (path: string) => MOVIE_DB_IMAGE_URL.medium + path;

const onImagError = (e: Event) => {
	(<HTMLImageElement>e.target).style.display = "none";
};

const renderReleaseYear = (date: string) =>
	`( ${date.split("-")[0] || "unknown"} )`;
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

.vote-average {
	position: absolute;
	right: 0;
	top: 0;
	background-color: #15141fcc;
	border-radius: 0 0 0 0.5rem;
	color: goldenrod;
	font-weight: bold;
	padding: 0.25rem 0.75rem;
}

.title {
	margin: 0.25rem 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.release-year {
	color: #bcbcbc;
}
</style>
