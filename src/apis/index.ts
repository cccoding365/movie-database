import axios from "@/utils/axios";
import { IMovieReqOption, IMovieList, ISearchMoviesReqOption } from "@/types";

/**
 * Get the list of specified movies according to the `filter` field.
 */
export const getMovies = ({
	filter,
	page,
}: IMovieReqOption): Promise<IMovieList> => {
	// const storage = localStorage.getItem(`movie#${filter}#${page}`);
	// if (storage) {
	// 	return Promise.resolve(JSON.parse(storage));
	// } else {
	// 	axios
	// 		.get(`/movie/${filter}`, {
	// 			params: { page },
	// 		})
	// 		.then(res => {
	// 			localStorage.setItem(
	// 				`movie#${filter}#${page}`,
	// 				JSON.stringify(res),
	// 			);
	// 		});

	// }
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
export const searchMovies = ({
	query,
	page,
}: ISearchMoviesReqOption): Promise<IMovieList> => {
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
	// const storage = localStorage.getItem(`movie#${id}`);
	// if (storage) {
	// 	return Promise.resolve(JSON.parse(storage));
	// } else {
	// 	axios.get(`/movie/${id}`).then(res => {
	// 		localStorage.setItem(`movie#${id}`, JSON.stringify(res));
	// 	});
	// }
	return axios.get(`/movie/${id}`);
};

/**
 * Get the alternative titles for a movie.
 */
export const getMovieAlternativeTitles = (id: Number) => {
	return axios.get(`/movie/${id}/alternative_titles`);
};

/**
 * Get the all credits of a movie by ID.
 */
export const getMovieCredits = (id: Number) => {
	// const storage = localStorage.getItem(`movie#${id}#credits`);
	// if (storage) {
	// 	return Promise.resolve(JSON.parse(storage));
	// } else {
	// 	axios.get(`/movie/${id}/credits`).then(res => {
	// 		localStorage.setItem(`movie#${id}#credits`, JSON.stringify(res));
	// 	});
	// }
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

/**
 * Get the user reviews for a movie.
 */
export const getMovieReviews = (id: Number) => {
	return axios.get(`/movie/${id}/reviews`);
};

/**
 * Get the similar movies based on genres and keywords.
 */
export const getMovieSimilar = (id: Number) => {
	return axios.get(`/movie/${id}/similar`);
};

/**
 * Get the translations for a movie.
 */
export const getMovieTranslations = (id: Number) => {
	return axios.get(`/movie/${id}/translations`);
};
