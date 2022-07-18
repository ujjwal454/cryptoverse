import * as types from "../constants";
import axios from "axios";

const options = {
	method: "GET",
	url: "https://coinranking1.p.rapidapi.com/stats",
	params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
	headers: {
		"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
		"X-RapidAPI-Key": "9262bf3443msh0ab5de98a5ab593p16314bjsn08dd31a1f1dd",
	},
};

const fetchStatStart = () => {
	return {
		type: types.STATFETCHSTART,
	};
};
const fetchStatSuccess = (stats) => {
	return {
		type: types.STATFETCHSUCCESS,
		payload: stats,
	};
};

const fetchStatFail = () => {
	return {
		type: types.STATFETCHFAIL,
	};
};

export const fetchStatsInitiate = () => {
	return function (dispatch) {
		dispatch(fetchStatStart());
		axios
			.request(options)
			.then(function (response) {
				const data = response.data.data;
				console.log(data);
				dispatch(fetchStatSuccess(data));
			})
			.catch(function (error) {
				console.error(error);
				dispatch(fetchStatFail());
			});
	};
};
