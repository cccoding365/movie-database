<template>
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
			<router-link
				:to="`movie/${item.id}`"
				class="movie-card"
				v-for="item in MovieData.results"
			>
				<img
					class="poster"
					:src="MOVIE_DB_IMAGE_URL.medium + item.poster_path"
					@error="onImgError"
				/>
				<div class="original_title" :title="item.title">
					{{ item.title }}
				</div>
				<div class="release_year">
					( {{ item.release_date.split("-")[0] }} )
				</div>
			</router-link>
		</div>
	</div>
	<Footer />
</template>

<script lang="ts" setup>
import Footer from "@/components/Footer.vue";

import MovieData from "@/apis/fake-data.json";
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";
import { onMounted } from "vue";

onMounted(() => {
	console.log(MovieData);
});

const onImgError = () => {
	console.error("Image load error!");
};
</script>

<style lang="less" scoped>
.main {
	padding: 1rem;
	.title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		animation: fadeIn 0.5s forwards;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.search-bar {
		margin: 1rem 0;
		display: flex;
		align-items: center;
		position: relative;
		animation: fadeIn 0.5s forwards;

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
		animation: fadeIn 0.5s forwards;
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
			animation: fadeIn 0.5s forwards;
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
}
</style>