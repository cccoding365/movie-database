<template>
	<footer>
		<div class="container">
			@{{ new Date().getFullYear() }} made with
			<i class="icon fas fa-heart" />
			by DoubledConG
		</div>
	</footer>
</template>
<script setup lang="ts"></script>
<style scoped lang="less">
.container {
	padding: 1rem 0;
	color: #999;
	font-size: 0.75rem;
	text-align: center;
	.icon {
		color: #ff0808;
	}
}
</style>
