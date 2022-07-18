import { Action } from "history";
import * as types from "../constants";

const initialState = {
	loading: false,
	error: false,
	data: [],
};

export const coinsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHCOINSTART:
			return {
				...state,
				loading: true,
			};
		case types.FETCHCOINSUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false,
			};
		case types.FETCHCOINFAIL:
			return {
				...state,
				error: true,
			};
		case "coinCleanup":
			return {
				...state,
				data: [],
				error: false,
				loading: false,
			};
		default:
			return state;
	}
};
