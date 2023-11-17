import axios from "axios";
import config from "@/configs/axios";

export default axios.create({
	baseURL: config.baseURL,
	params: {
		api_key: config.MOVIE_DB_API_KEY,
		language: "en-US",
	},
});
