<template>
	<header :class="{ fixed: y > 10 }">
		<div class="container">
			<router-link class="router-link" to="/" @click="onRouteToHome">
				<img class="logo" src="/favicon.svg" alt="Movie Database" />
				<span class="title">{{ $t("AppConfig.title") }}</span>
			</router-link>
			<div class="language" @click="onChangeLang">
				<i class="icon fas fa-globe" />
				<span>{{ locale }}</span>
			</div>
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
	const lang = locale.value === "zh-CN" ? "en-US" : "zh-CN";
	locale.value = lang;
	localStorage.setItem("language", lang);
	window.location.reload();
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

		.language {
			margin-left: auto;
			font-size: 0.75rem;
			color: #ecc9c0;
			cursor: pointer;

			.icon {
				margin-right: 0.25rem;
			}
		}
		.more-icon {
			color: #ff8f71;
			margin-left: 1rem;
		}
	}
}
</style>
