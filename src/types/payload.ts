export type MovieFilter = "now_playing" | "popular" | "top_rated" | "upcoming";

export interface IMovieReqOption {
	filter: MovieFilter;
	page: Number;
}

export interface ISearchMoviesReqOption {
	query: String;
	page: Number;
}
