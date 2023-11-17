type MovieFilter = "now_playing" | "popular" | "top_rated" | "upcoming";

export interface IMovieReqOption {
	filter: MovieFilter;
	page: Number;
}
