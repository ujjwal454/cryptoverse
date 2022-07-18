import * as types from "../constants";
const initialState = {
	loading: false,
	data: {
		stats: {
			totalCoins: 0,
			totalMarketCap: 0,
			totalExchanges: 0,
			total24hVolume: 0,
		},
	},
	error: false,
};

export const StatReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.STATFETCHSTART:
			return {
				...state,
				loading: true,
			};
		case types.STATFETCHSUCCESS:
			return {
				...state,
				data: {
					stats: action.payload,
				},
				loading: false,
			};
		case types.STATFETCHFAIL:
			return {
				...state,
				error: true,
			};
		default:
			return state;
	}
};
