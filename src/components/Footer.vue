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
	padding: 0.5rem;
	font-size: 0.75rem;
	text-align: center;
	.icon {
		color: #ff0808;
	}
}
</style>
