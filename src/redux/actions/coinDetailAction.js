import axios from "axios";

const fetchCoinStart = () => {
	return {
		type: "coinFetchStart",
	};
};

const fetchCoinSuccess = (coin) => {
	return {
		type: "fetchCoinSuccess",
		payload: coin,
	};
};

const fetchCoinFail = () => {
	return {
		type: "fetchCoinFail",
	};
};
export const loadingTrue = () => {
	return {
		type: "loadingTrue",
	};
};
export const cleanup = () => {
	return {
		type: "cleanup",
	};
};
export const fetchCoinDetailInitiate = (uuid) => {
	return function (dispatch) {
		dispatch(fetchCoinStart());
		const options = {
			method: "GET",
			url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
			params: { referenceCurrencyUuid: `${uuid}`, timePeriod: "24h" },
			headers: {
				"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
				"X-RapidAPI-Key": "9262bf3443msh0ab5de98a5ab593p16314bjsn08dd31a1f1dd",
			},
		};
		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				dispatch(fetchCoinSuccess(response.data));
			})
			.catch(function (error) {
				console.error(error);
				dispatch(fetchCoinFail());
			});
	};
};
