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
		<div v-if="isShowMenu" class="menu-list">
			<span
				:class="['menu-list-item', i.id === activeId ? 'active' : '']"
				v-for="i in menuList"
				:key="i.id"
				@click="onMenuClick(i)"
			>
				{{ i.label }}
			</span>
		</div>

		<div v-else class="search-result-title">
			{{ `SEARCH RESULTS "${searchQuery}"` }}
			<i class="icon fas fa-times" @click="onSearchClose" />
		</div>

		<div class="movie-list">
			<router-link
				:to="`movie/${item.id}`"
				class="movie-card"
				v-for="item in MovieList.results"
			>
				<MovieCard :data="item" />
			</router-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { homeTitle, menuList } from "@/constants";
import { MovieFilter, IMovieList, IMenuItem } from "@/types";
import { getMovies, searchMovies } from "@/apis";
import MovieCard from "@/components/MovieCard.vue";

let MovieList = ref<IMovieList>({ results: [] });
const fetchMovieList = async (filter: MovieFilter = "now_playing") => {
	page.value = 1;
	MovieList.value = await getMovies({ filter, page: page.value });
};

onMounted(fetchMovieList);

const searchQuery = ref<String>("");
const isShowMenu = ref<Boolean>(true);
const onMovieSearch = async () => {
	MovieList.value = await searchMovies({ query: searchQuery.value, page: 1 });
	isShowMenu.value = false;
};

const onSearchClose = () => {
	isShowMenu.value = true;
	searchQuery.value = "";
	fetchMovieList();
};

const activeId = ref<number>(1);
const onMenuClick = (menuItem: IMenuItem) => {
	const { id, value } = menuItem;
	activeId.value = id;

	fetchMovieList(value);
};

const page = ref<number>(1);
useEventListener(window, "scroll", async () => {
	const { arrivedState } = useScroll(window, {
		behavior: "smooth",
	});

	if (arrivedState.bottom) {
		const { value } = menuList.find(i => i.id === activeId.value)!;
		page.value += 1;

		if (isShowMenu.value) {
			const { results } = await getMovies({
				filter: value,
				page: page.value,
			});
			MovieList.value.results.push(...results);
		} else {
			const { results } = await searchMovies({
				query: searchQuery.value,
				page: page.value,
			});
			MovieList.value.results.push(...results);
		}
	}
});
</script>

<style lang="less" scoped>
.main {
	padding: 1rem;
	.title {
		font-size: 1.25rem;
		font-weight: bold;
		animation: fadeIn 0.5s forwards;
	}

	.search-bar {
		margin: 1rem 0;
		display: flex;
		align-items: center;
		position: relative;
		animation: fadeIn 0.5s forwards;

		.icon {
			color: #fff;
			position: absolute;
			left: 1rem;
		}

		input {
			text-indent: 2rem;
			width: 100%;
			font-size: 0.875rem;
			padding: 0.5rem 1rem;
			border: 2px solid #454354;
			border-radius: 999px;
			color: #6e6d76;
			background-color: #211f30;
		}
	}
	.menu-list {
		animation: fadeIn 0.5s forwards;
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

	.search-result-title {
		font-size: 0.875rem;
		color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		background-image: linear-gradient(90deg, #f44c35, #ff8f71);
		display: flex;
		align-items: center;
		.icon {
			margin-left: 1rem;
			cursor: pointer;
		}
	}

	.movie-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 1.75rem 0;
		gap: 1.75rem;
		animation: fadeIn 0.5s forwards;

		.movie-card {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			width: 8.125rem;
			font-size: 0.75rem;
			position: relative;
			transition: transform 0.2s cubic-bezier(0.34, 2, 0.6, 1),
				box-shadow 0.1s ease;
			&:hover {
				box-shadow: 0px 12px 19px -7px rgba(0, 0, 0, 0.3);
				transform: translateY(-10px);
			}
		}
	}
}
</style>
