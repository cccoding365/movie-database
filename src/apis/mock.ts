import axios from "@/utils/axios";
import { IMovieReqOption, IMovieList, ISearchMoviesReqOption } from "@/types";

import nowPlaying from "@/mocks/movie_now-playing.json";
import popular from "@/mocks/movie_popular.json";
import topRated from "@/mocks/movie_top-rated.json";
import upcoming from "@/mocks/movie_upcoming.json";
import searchResult from "@/mocks/movie_search-result.json";

export const getMovies = ({
	filter,
	page,
}: IMovieReqOption): Promise<IMovieList> => {
	const movieListMap = new Map([
		["now_playing", nowPlaying],
		["popular", popular],
		["top_rated", topRated],
		["upcoming", upcoming],
	]);
	return new Promise((resolve, reject) => {
		if (movieListMap.has(filter)) {
			resolve(movieListMap.get(filter)!);
		} else {
			reject({ results: [] });
		}
	});
};

export const getGenres = () => {
	return axios.get("/genre/movie/list");
};

export const searchMovies = ({
	query,
	page,
}: ISearchMoviesReqOption): Promise<IMovieList> => {
	return new Promise((resolve, reject) => {
		if (query) {
			setTimeout(() => {
				resolve(searchResult);
			}, 1000);
		} else {
			resolve({ results: [] });
		}
	});
};

export const getMovie = (id: Number) => {
	return axios.get(`/movie/${id}`);
};

export const getMovieAlternativeTitles = (id: Number) => {
	return axios.get(`/movie/${id}/alternative_titles`);
};

export const getMovieCredits = (id: Number) => {
	return axios.get(`/movie/${id}/credits`);
};

export const getMovieImages = (id: Number) => {
	return axios.get(`/movie/${id}/images`, {
		params: {
			language: "null",
		},
	});
};

export const getMovieRecommendations = (id: Number) => {
	return axios.get(`/movie/${id}/recommendations`, {
		params: {
			language: "null",
			page: 1,
		},
	});
};

export const getMovieReviews = (id: Number) => {
	return axios.get(`/movie/${id}/reviews`);
};

export const getMovieSimilar = (id: Number) => {
	return axios.get(`/movie/${id}/similar`);
};

export const getMovieTranslations = (id: Number) => {
	return axios.get(`/movie/${id}/translations`);
};
