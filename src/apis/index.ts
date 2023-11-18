import axios from "@/utils/axios";
import { IMovieReqOption, ISearchMoviesReqOption } from "@/types/payload";

/**
 * Get the list of specified movies according to the `filter` field.
 */
export const getMovies = ({ filter, page }: IMovieReqOption) => {
	return axios.get(`/movie/${filter}`, {
		params: { page },
	});
};

/**
 * Get the list of official genres for movies.
 */
export const getGenres = () => {
	return axios.get("/genre/movie/list");
};

/**
 * Search for movies by their original, translated and alternative titles.
 */
export const searchMovies = ({ query, page }: ISearchMoviesReqOption) => {
	return axios.get(`/search/movie`, {
		params: {
			query,
			page,
		},
	});
};

/**
 * Get the top level details of a movie by ID.
 */
export const getMovie = (id: Number) => {
	return axios.get(`/movie/${id}`);
};

/**
 * Get the all credits of a movie by ID.
 */
export const getMovieCredits = (id: Number) => {
	return axios.get(`/movie/${id}/credits`);
};

/**
 * Get the images that belong to a movie.
 */
export const getMovieImages = (id: Number) => {
	return axios.get(`/movie/${id}/images`, {
		params: {
			language: "null",
		},
	});
};

/**
 * Get relevant recommendations by movie ID.
 */
export const getMovieRecommendations = (id: Number) => {
	return axios.get(`/movie/${id}/recommendations`, {
		params: {
			language: "null",
			page: 1,
		},
	});
};
