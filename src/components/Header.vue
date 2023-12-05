<template>
	<header :class="{ fixed: y > 10 }">
		<div class="container">
			<router-link class="router-link" to="/" @click="onRouteToHome">
				<img class="logo" src="/favicon.svg" alt="Movie Database" />
				<span class="title">{{ $t("AppConfig.title") }}</span>
			</router-link>
			<i class="change-language fas fa-globe" @click="onChangeLang" />
			<span>{{ locale }}</span>
			<i class="more-icon fas fa-bars" />
		</div>
	</header>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
import { useScroll } from "@vueuse/core";
const { y } = useScroll(window);

const onChangeLang = () => {
	locale.value = locale.value === "zh" ? "en" : "zh";
};

const onRouteToHome = () => {
	window.scrollTo(0, 0);
};
</script>

<style scoped lang="less">
header {
	left: 0;
	right: 0;
	height: 3.75rem;
	z-index: 999;
	display: flex;
	justify-content: center;
	transition: all 0.25s;
	background-color: #00000033;
	&.fixed {
		position: fixed;
		z-index: 9999;
		background-color: #15141faa;
		backdrop-filter: blur(20px) saturate(200%);
	}

	.container {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 1rem;

		max-width: 1200px;

		.router-link {
			display: flex;
			align-items: center;
		}

		.logo {
			width: 1.875rem;
			height: 1.875rem;
			margin-right: 1rem;
		}
		.title {
			font-size: 1.25rem;
			font-weight: bold;
			text-transform: uppercase;
			color: transparent;
			-webkit-background-clip: text;
			background-clip: text;
			background-image: linear-gradient(90deg, #f44c35, #ff8f71);
		}

		.change-language {
			margin-left: auto;
			margin-right: 0.5rem;
		}
		.more-icon {
			color: #ff8f71;
			margin-left: 1rem;
		}
	}
}
</style>
