const initialState = {
	loading: false,
	coinDetail: {
		data: {
			coin: {
				allTimeHigh: { price: "0", timestamp: 0 },
				btcPrice: "0",
				change: "0",
				marketCap: "0",
				name: "",
				numberOfExchanges: 0,
				numberOfMarkets: 0,
				price: "0",
				priceAt: 0,
				rank: 0,
				supply: { confirmed: false, total: "0", circulating: "0" },
				uuid: "WcwrkfNI4FUAe",
			},
		},
	},
};

export const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case "coinFetchStart":
			return {
				...state,
				loading: true,
			};
		case "fetchCoinSuccess":
			return {
				...state,
				coinDetail: action.payload,
				loading: false,
			};
		case "fetchCoinFail":
			return {
				...state,
				loading: true,
			};
		case "loadingTrue":
			return {
				...state,
				loading: true,
			};
		case "cleanup":
			return (state = initialState);
		default:
			return state;
	}
};
