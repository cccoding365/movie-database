<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

import MovieData from "@/apis/fake-data.json";
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";
import { onMounted } from "vue";

onMounted(() => {
	console.log(MovieData);
});
</script>

<template>
	<Header />
	<div class="main">
		<div class="title">Find Movies, TV series, and more...</div>
		<div class="search-bar">
			<i class="icon fas fa-search" />
			<input type="text" placeholder="Sherlock Holmes" />
		</div>
		<nav class="nav-bar">
			<ul class="nav-list">
				<li class="nav-list-item active">Now playing</li>
				<li class="nav-list-item">Popular</li>
				<li class="nav-list-item">Top rated</li>
				<li class="nav-list-item">Upcoming</li>
			</ul>
		</nav>

		<div class="movie-container">
			<div class="movie-card" v-for="item in MovieData.results">
				<img
					class="poster"
					:src="MOVIE_DB_IMAGE_URL.medium + item.poster_path"
				/>
				<div class="original_title">{{ item.original_title }}</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<style scoped lang="less">
.main {
	padding: 1rem;
	.title {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	.search-bar {
		margin: 1rem 0;
		display: flex;
		align-items: center;
		position: relative;

		.icon {
			position: absolute;
			left: 1rem;
		}

		input {
			text-indent: 2rem;
			width: 100%;
			font-size: 0.875rem;
			padding: 0.5rem 1rem;
			border-radius: 999px;
			color: #6e6d76;
			background-color: #211f30;
		}
	}

	.nav-bar {
		margin: 1rem 0;
		.nav-list {
			display: flex;
			font-size: 0.875rem;

			&-item {
				margin-right: 1rem;
				white-space: nowrap;
				&.active {
					color: transparent;
					-webkit-background-clip: text;
					background-clip: text;
					background-image: linear-gradient(90deg, #f44c35, #ff8f71);
					position: relative;
					&::after {
						content: "";
						position: absolute;
						height: 0.125rem;
						width: 30%;
						background: linear-gradient(90deg, #f44c35, #ff8f71);
						left: 0;
						top: 120%;
						border-radius: 999px;
					}
				}
			}
		}
	}

	.movie-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		row-gap: 2rem;
		column-gap: 1.5rem;

		.movie-card {
			width: 8.125rem;

			.poster {
				width: 100%;
				border-radius: 0.75rem;
			}
			.original_title {
				text-align: center;
				font-size: 0.75rem;
				line-height: 1rem;
			}
		}
	}
}
</style>
