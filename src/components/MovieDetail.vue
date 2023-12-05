<template>
	<div class="movie-title">{{ data.title }}</div>

	<div class="tagline">{{ data.tagline }}</div>

	<div class="section runtime">
		<i class="icon fas fa-clock" />
		<span class="content"> {{ data.runtime }} minutes </span>
		<i class="icon fas fa-star" />
		<span class="content">
			{{ data.vote_average?.toFixed(1) }} ( TMDB )
		</span>
	</div>

	<div class="section">
		<div class="release-date">
			<div class="title">Release date</div>
			<div class="content">{{ data.release_date }}</div>
		</div>
		<div class="genre">
			<div class="title">Genre</div>
			<div class="content">
				<span v-for="item in data.genres">
					{{ item.name }}
				</span>
			</div>
		</div>
	</div>

	<div class="section overview">
		<div class="title">Overview</div>
		<div class="content">{{ data.overview }}</div>
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
.movie-title {
	font-size: 1.5rem;
	line-height: 3rem;
}
.tagline {
	color: #ccc;
	font-size: 0.75rem;
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
	.title {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}
	.content {
		color: #ccc;
		font-size: 0.75rem;
	}
	.release-date,
	.genre {
		flex: 1;
		.content {
			display: flex;
			flex-wrap: wrap;
			span {
				border-radius: 999px;
				padding: 0.1rem 0.5rem;
				border: 1px solid #999;
				font-size: 0.5rem;
				margin: 0 0.5rem 0.5rem 0;
			}
		}
	}
	&.runtime {
		align-items: center;
	}
	&.overview {
		flex-direction: column;
		.content {
			text-align: justify;
			// display: -webkit-box;
			// -webkit-line-clamp: 5;
			// -webkit-box-orient: vertical;
			// overflow: hidden;
		}
	}
}
</style>
