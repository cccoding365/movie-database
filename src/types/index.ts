export type MovieFilter = "now_playing" | "popular" | "top_rated" | "upcoming";

export interface IMenuItem {
	id: number;
	label: String;
	value: MovieFilter;
}

export interface IMovieReqOption {
	filter: MovieFilter;
	page: Number;
}

export interface ISearchMoviesReqOption {
	query: String;
	page: Number;
}

export interface IMovieList {
	dates?: any;
	page?: Number;
	results: any[];
	total_pages?: Number;
	total_results?: Number;
}
