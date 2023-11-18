<script setup lang="ts">
// import { onMounted } from "vue";
import {
	getMovies,
	getGenres,
	searchMovies,
	getMovie,
	getMovieCredits,
	getMovieImages,
	getMovieRecommendations,
} from "@/apis";

const onGetMovies = async () => {
	const data = await getMovies({
		filter: "popular",
		page: 1,
	});
	console.log("getMovies", data);
};

const onGetGenres = async () => {
	const data = await getGenres();
	console.log(data);
};

const onSearchMovies = async () => {
	const data = await searchMovies({
		query: "叶问",
		page: 1,
	});
	console.log(data);
};

const onGetMovie = async () => {
	const data = await getMovie(872585);
	console.log(data);
};

const onMovieCredits = async () => {
	const data = await getMovieCredits(872585);
	console.log(data);
};

const onGetMovieImages = async () => {
	const data = await getMovieImages(872585);
	console.log(data);
};

const onGetMovieRecommendations = async () => {
	const data = await getMovieRecommendations(872585);
	console.log(data);
};
</script>

<template>
	<h1>Movie database</h1>
	<button @click="onGetMovies">getMovies</button>
	<button @click="onGetGenres">getGenres</button>
	<button @click="onSearchMovies">searchMovies</button>
	<button @click="onGetMovie">getMovie</button>
	<button @click="onMovieCredits">getMovieCredits</button>
	<button @click="onGetMovieImages">getMovieImages</button>
	<button @click="onGetMovieRecommendations">getMovieRecommendations</button>
</template>

<style scoped lang="less">
h1 {
	color: #fff;
	font-family: "Ubuntu", sans-serif;
}
button {
	padding: 5px 10px;
	color: white;
	font-weight: bold;
	background-color: lightblue;
	&:nth-child(odd) {
		background-color: lightpink;
	}
}
</style>
