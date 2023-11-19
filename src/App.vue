<script setup lang="ts">
import * as Apis from "@/apis";

const onGetMovies = async () => {
	const data = await Apis.getMovies({
		filter: "popular",
		page: 1,
	});
	console.log("getMovies", data);
};

const onGetGenres = async () => {
	const data = await Apis.getGenres();
	console.log(data);
};

const onSearchMovies = async () => {
	const data = await Apis.searchMovies({
		query: "叶问",
		page: 1,
	});
	console.log(data);
};

const onGetMovie = async () => {
	const data = await Apis.getMovie(872585);
	console.log(data);
};

const onMovieCredits = async () => {
	const data = await Apis.getMovieCredits(872585);
	console.log(data);
};

const onGetMovieImages = async () => {
	const data = await Apis.getMovieImages(872585);
	console.log(data);
};

const onGetMovieRecommendations = async () => {
	const data = await Apis.getMovieRecommendations(872585);
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
