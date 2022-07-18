import * as types from "../constants";

const NewsinitialState = {
	news: [],
	newsLoading: false,
	error: false,
};

export const newsReducer = (state = NewsinitialState, action) => {
	switch (action.type) {
		case types.FETCHNEWSSTART:
			return {
				...state,
				newsLoading: true,
			};
		case types.FETCHNEWSSUCCESS:
			return {
				...state,
				newsLoading: false,
				news: action.payload,
			};
		case types.FETCHNEWSFAIL:
			return {
				...state,
				error: true,
			};
		default:
			return state;
	}
};
