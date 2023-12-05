<template>
	<div class="title">Cast & Crew</div>
	<div class="casts">
		<div class="cast-item" v-for="item in data.cast">
			<div class="profile">
				<img
					v-if="item.profile_path"
					:src="getProfileImgSrc(item.profile_path)"
					@error="onImagError"
				/>
			</div>
			<div class="name">{{ item.name }}</div>
			<div class="character">{{ item.character }}</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";

interface ICast {
	profile_path: string;
	name: string;
	character: string;
}

interface IMovieCredits {
	cast: ICast[];
}
defineProps<{
	data: IMovieCredits;
}>();

const getProfileImgSrc = (path: string) => MOVIE_DB_IMAGE_URL.medium + path;

const onImagError = (e: Event) => {
	(<HTMLImageElement>e.target).style.display = "none";
};
</script>
<style lang="less" scoped>
.title {
	color: #fff;
	font-size: 1.125rem;
	margin-bottom: 0.5rem;
}
.casts {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1rem;
	.cast-item {
		display: flex;
		flex-direction: column;
		width: 6.25rem;

		.profile {
			border-radius: 0.5rem;
			display: flex;
			overflow: hidden;
			img {
				width: 100%;
			}
			&::after {
				content: "no photo";
				font-size: 1.5rem;
				font-style: oblique;
				text-transform: capitalize;
				padding-top: 100%;
				color: #999;
				font-weight: bold;
			}
		}
		.name {
			line-height: 1.5rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.character {
			color: #999;
			line-height: 1rem;
			font-size: 0.75rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
}
</style>
