<template>
	<div class="movie-detail">
		<div class="movie-detail-backdrop">
			<img :src="MOVIE_DB_IMAGE_URL.large + MovieDetail.backdrop_path" />
		</div>

		<div class="movie-detail-content">
			<div class="movie-detail-title">{{ MovieDetail.title }}</div>

			<div class="tagline">{{ MovieDetail.tagline }}</div>

			<div class="section">
				<i class="icon fas fa-clock" />
				<span> {{ MovieDetail.runtime }} minutes </span>
				<i class="icon fas fa-star" />
				<span>
					{{ MovieDetail.vote_average.toFixed(1) }} ( TMDB )
				</span>
			</div>

			<div class="section">
				<div class="release-date">
					<div class="label">Release date</div>
					<div class="value">{{ MovieDetail.release_date }}</div>
				</div>
				<div class="genre">
					<div class="label">Genre</div>
					<div class="value">
						<span v-for="item in MovieDetail.genres">
							{{ item.name }}
						</span>
					</div>
				</div>
			</div>

			<div class="overview">
				<div class="overview-title">Overview</div>
				<div class="overview-content">{{ MovieDetail.overview }}</div>
			</div>
		</div>

		<div class="movie-redits">
			<div class="movie-redits-title">Cast & Crew</div>
			<div class="movie-redits-cast">
				<div
					class="movie-redits-cast-item"
					v-for="item in MovieCredits.cast"
				>
					<div class="movie-redits-cast-profile">
						<img
							class="movie-redits-cast-profile"
							:src="MOVIE_DB_IMAGE_URL.small + item.profile_path"
							alt="cast-profile"
							@error="e => ((e.target as any).style.display = 'none')"
						/>
					</div>

					<div class="name">{{ item.name }}</div>
					<div class="character">{{ item.character }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { MOVIE_DB_IMAGE_URL } from "@/configs/image";
import MovieDetail from "@/apis/movie-detail.json";
import MovieCredits from "@/apis/movie-credits.json";

import { onMounted } from "vue";

onMounted(() => {
	console.log({ MovieDetail });
	console.log({ MovieCredits });
});
</script>

<style lang="less" scoped>
.movie-redits {
	&-title {
		color: #fff;
		font-size: 1.125rem;
		margin-bottom: 0.5rem;
	}
	&-cast {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1rem;
		&-item {
			display: flex;
			flex-direction: column;
			// justify-content: flex-end;
			width: 6.25rem;
		}
		&-profile {
			border-radius: 0.5rem;
			display: flex;
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
				z-index: -1;
			}
		}
		.name {
			font-size: 1rem;
			margin: 0.5rem 0;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.character {
			color: #999;
			font-size: 0.75rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
	padding: 0 1rem;
}

.movie-detail {
	&-backdrop {
		width: 100%;
		position: relative;
		img {
			width: 100%;
		}
		&::after {
			content: "";
			position: absolute;
			height: 100%;
			width: 100%;
			left: 0;
			background: linear-gradient(0deg, #15141f, #15141f09);
		}
	}
	&-title {
		margin: 0.5rem 0;
		font-size: 1.5rem;
		color: #fff;
	}

	.tagline {
		font-size: 0.75rem;
		line-height: 1rem;
	}

	&-content {
		padding: 0 1rem;
		font-size: 0.875rem;
		color: #bcbcbc;
		position: relative;

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
					span {
						border-radius: 999px;
						padding: 0.2rem 0.5rem;
						border: 1px solid #999;
						font-size: 0.6rem;
						margin-right: 0.5rem;
					}
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
			line-height: 1.125rem;
		}
	}
}
</style>
