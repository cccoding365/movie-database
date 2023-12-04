<template>
	<div class="title">{{ data.title }}</div>

	<div class="tagline">{{ data.tagline }}</div>

	<div class="section">
		<i class="icon fas fa-clock" />
		<span> {{ data.runtime }} minutes </span>
		<i class="icon fas fa-star" />
		<span> {{ data.vote_average?.toFixed(1) }} ( TMDB ) </span>
	</div>

	<div class="section">
		<div class="release-date">
			<div class="label">Release date</div>
			<div class="value">{{ data.release_date }}</div>
		</div>
		<div class="genre">
			<div class="label">Genre</div>
			<div class="value">
				<span v-for="item in data.genres">
					{{ item.name }}
				</span>
			</div>
		</div>
	</div>

	<div class="overview">
		<div class="overview-title">Overview</div>
		<div class="overview-content">{{ data.overview }}</div>
	</div>
</template>
<script lang="ts" setup>
interface IGenre {
	name: string;
}

interface IMovieDetail {
	title: string;
	tagline: string;
	runtime: string;
	vote_average: number;
	release_date: string;
	genres: IGenre[];
	overview: string;
}

defineProps<{
	data: IMovieDetail;
}>();
</script>
<style lang="less" scoped>
.title {
	margin: 0.5rem 0;
	font-size: 1.5rem;
	color: #fff;
}

.tagline {
	font-size: 0.75rem;
	line-height: 1rem;
}

.section {
	display: flex;
	padding: 0.75rem 0;
	margin-bottom: 0.5rem;
	border-bottom: 1px solid #201f28;
	.icon {
		&:not(:nth-child(1)) {
			margin-left: 1rem;
		}
		margin-right: 0.25rem;
	}
	.release-date,
	.genre {
		flex: 1;
		.label {
			color: #fff;
			font-size: 1.125rem;
			margin-bottom: 0.5rem;
		}
		.value {
			display: flex;
			flex-wrap: wrap;
			span {
				border-radius: 999px;
				padding: 0.2rem 0.5rem;
				border: 1px solid #999;
				font-size: 0.6rem;
				margin: 0 0.5rem 0.5rem 0;
			}
		}
	}
}

.overview {
	padding: 0.75rem 0;
	margin-bottom: 0.5rem;
	border-bottom: 1px solid #201f28;
	&-title {
		color: #fff;
		font-size: 1.125rem;
		margin-bottom: 0.5rem;
	}
	&-content {
		line-height: 1.25rem;
	}
}
</style>
