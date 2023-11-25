<template>
	<div class="main">
		<div class="title">Find Movies, TV series, and more...</div>
		<div class="search-bar">
			<i class="icon fas fa-search" />
			<input
				ref="SearchInput"
				type="text"
				placeholder="Sherlock Holmes"
				@keyup.enter="onEnterKeyup"
			/>
		</div>

		<MovieList />
	</div>
</template>

<script lang="ts" setup>
import MovieList from "@/components/MovieList.vue";

const onEnterKeyup = (e: KeyboardEvent) => {
	console.log((e.target as HTMLInputElement).value);
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
}
</style>
