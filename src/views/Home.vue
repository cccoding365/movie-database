<template>
	<div class="main">
		<div class="title">{{ homeTitle }}</div>
		<div class="search-bar">
			<i class="icon fas fa-search" />
			<input
				type="text"
				v-model="searchQuery"
				placeholder="Sherlock Holmes"
				@keyup.enter="onMovieSearch"
			/>
		</div>
		<div v-show="isShowMenu" class="menu-list">
			<span
				:class="['menu-list-item', i.id === activeId ? 'active' : '']"
				v-for="i in menuList"
				:key="i.id"
				@click="onMenuClick(i)"
			>
				{{ i.label }}
			</span>
		</div>

		<div class="movie-list">
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
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";
import { homeTitle, menuList } from "@/constants";
import { MovieFilter, IMovieList, IMenuItem } from "@/types";
import { getMovies, searchMovies } from "@/apis/mock";
import { useScroll, useEventListener } from "@vueuse/core";

onMounted(() => fetchMovieList());

let MovieList = ref<IMovieList>({ results: [] });
const fetchMovieList = async (filter: MovieFilter = "now_playing") => {
	MovieList.value = await getMovies({ filter, page: 1 });
};

const searchQuery = ref<String>("");
const isShowMenu = ref<Boolean>(true);
const onMovieSearch = async () => {
	MovieList.value = await searchMovies({ query: searchQuery.value, page: 1 });
};

const activeId = ref<Number>(1);
const onMenuClick = (menuItem: IMenuItem) => {
	const { id, value } = menuItem;
	activeId.value = id;
	fetchMovieList(value);
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
</script>

<style lang="less" scoped>
.main {
	padding: 1rem;
	.title {
		font-size: 1.25rem;
		font-weight: bold;
		line-height: 1.75rem;
		animation: fadeIn 0.5s forwards;
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
	.menu-list {
		animation: fadeIn 0.5s forwards;
		margin: 1.5rem 0;
		font-size: 0.875rem;

		&-item {
			margin-right: 1rem;
			white-space: nowrap;
			cursor: pointer;

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
					width: 50%;
					background: linear-gradient(90deg, #f44c35, #ff8f71);
					left: 0;
					top: 120%;
					border-radius: 999px;
				}
			}
		}
	}

	.movie-list {
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
}
</style>
