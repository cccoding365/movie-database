<template>
	<div class="container" :class="{ fixed: y > 10 }">
		<img class="logo" src="/favicon.svg" alt="Movie Database" />
		<div class="title">MovieDatabase</div>
		<i class="more-icon fas fa-bars" />
	</div>
</template>

<script setup lang="ts">
import { useScroll } from "@vueuse/core";

const { y } = useScroll(window);
</script>

<style scoped lang="less">
.container {
	width: 100%;
	display: flex;
	align-items: center;
	padding: 2.1333vw;

	&.fixed {
		position: fixed;
		z-index: 9999;
		background-color: #333;
	}

	.logo {
		width: 8.5333vw;
		height: 8.5333vw;
		margin-right: 2.1333vw;
	}
	.title {
		color: #fff;
		font-size: 4.8vw;
		font-weight: bold;
	}
	.more-icon {
		color: #fff;
		font-size: 6.4vw;
		margin-left: auto;
	}
}
</style>
