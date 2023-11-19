<template>
	<header :class="{ fixed: y > 60 }">
		<div class="container">
			<img class="logo" src="/favicon.svg" alt="Movie Database" />
			<span class="title">Movie·Database</span>
			<i class="more-icon fas fa-bars" />
		</div>
	</header>
</template>

<script setup lang="ts">
import { useScroll } from "@vueuse/core";

const { y } = useScroll(window);
</script>

<style scoped lang="less">
header {
	left: 0;
	right: 0;
	height: 3.75rem;
	display: flex;
	justify-content: center;
	transition: all 0.25s;
	&.fixed {
		position: fixed;
		z-index: 9999;
		background-color: #ececec;
	}

	.container {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 1rem;

		max-width: 1024px;

		.logo {
			width: 1.875rem;
			height: 1.875rem;
			margin-right: 1rem;
		}
		.title {
			color: #ff0808;
			font-weight: bold;
			text-transform: uppercase;
		}
		.more-icon {
			color: #ff0808;
			margin-left: auto;
		}
	}
}
</style>
