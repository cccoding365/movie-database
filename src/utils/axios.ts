import Axios from "axios";
import config from "@/configs/axios";

const axios = Axios.create({
	baseURL: config.baseURL,
	params: {
		api_key: config.MOVIE_DB_API_KEY,
	},
});

// Add a request interceptor
axios.interceptors.request.use(
	config => {
		// Do something before request is sent
		return config;
	},
	error => {
		// Do something with request error
		return Promise.reject(error);
	},
);

// Add a response interceptor
axios.interceptors.response.use(
	response => {
		if (response.status === 200) {
			return response.data;
		} else {
			return Promise.resolve({});
		}
	},
	error => {
		return Promise.reject(error);
	},
);

export default axios;
