import * as types from "../constants";
import axios from "axios";

const fetchCoinStart = () => {
	return {
		type: types.FETCHCOINSTART,
	};
};
const fetchCoinSuccess = (coins) => {
	return {
		type: types.FETCHCOINSUCCESS,
		payload: coins,
	};
};

const fetchCoinFail = () => {
	return {
		type: types.FETCHCOINFAIL,
	};
};
export const coinsCleanup = () => {
	return {
		type: "coinCleanup",
	};
};

export const fetchCoinInitiate = (count) => {
	return function (dispatch) {
		const options = {
			method: "GET",
			url: "https://coinranking1.p.rapidapi.com/coins",
			params: {
				referenceCurrencyUuid: "yhjMzLPhuIDl",
				timePeriod: "24h",
				"tiers[0]": "1",
				orderBy: "marketCap",
				orderDirection: "desc",
				limit: `${count}`,
				offset: "0",
			},
			headers: {
				"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
				"X-RapidAPI-Key": "9262bf3443msh0ab5de98a5ab593p16314bjsn08dd31a1f1dd",
			},
		};
		dispatch(fetchCoinStart());
		axios
			.request(options)
			.then(function (response) {
				const coins = response.data.data.coins;
				dispatch(fetchCoinSuccess(coins));
			})
			.catch(function (error) {
				console.error(error);
				dispatch(fetchCoinFail());
			});
	};
};
