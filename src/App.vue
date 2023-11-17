<script setup lang="ts">
import { onMounted } from "vue";
// import { getMovies } from "@/apis";

onMounted(() => {
	// getMovies({
	// 	filter: "popular",
	// 	page: 1,
	// });
});
</script>

<template>
	<h1>Movie database</h1>
</template>

<style scoped lang="less">
h1 {
	color: #fff;
	font-family: "Ubuntu", sans-serif;
}
</style>
