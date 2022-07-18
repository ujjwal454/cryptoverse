import * as types from "../constants";

import axios from "axios";

const newsFetchStart = () => {
	return {
		type: types.FETCHNEWSSTART,
	};
};
const newsFetchSuccess = (news) => {
	return {
		type: types.FETCHNEWSSUCCESS,
		payload: news,
	};
};

const newsFetchFail = () => {
	return {
		type: types.FETCHNEWSFAIL,
	};
};

export const newsFetchInitiate = (count) => {
	return function (dispatch) {
		dispatch(newsFetchStart());
		const options = {
			method: "GET",
			url: "https://bing-news-search1.p.rapidapi.com/news/search",
			params: {
				q: "cryptocurrency",
				count: `${count}`,
				freshness: "Day",
				textFormat: "Raw",
				safeSearch: "Off",
			},
			headers: {
				"X-BingApis-SDK": "true",
				"X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
				"X-RapidAPI-Key": "9262bf3443msh0ab5de98a5ab593p16314bjsn08dd31a1f1dd",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				const news = response.data.value;
				console.log(news);
				dispatch(newsFetchSuccess(news));
			})
			.catch(function (error) {
				console.error(error);
				dispatch(newsFetchFail());
			});
	};
};
