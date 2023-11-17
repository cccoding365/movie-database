import axios from "@/utils/axios";
import { IMovieReqOption } from "@/types/payload";

export const getMovies = (option: IMovieReqOption) => {
	const filter = option.filter || "popular";
	return axios.get(`/movie/${filter}`, {
		params: { page: option.page },
	});
};
