import * as types from "../constants";

const initialState = {
	data: [
		{
			id: 0,
			title: "just create",
			detail:
				"maybe you want to create a note from your observation about a certain coin",
		},
	],
};

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CREATENOTE:
			return {
				...state,
				data: [...state.data, action.payload],
			};
		case types.DELETENOTE:
			const updatedlist = state.data.filter(
				(note) => note.id !== action.payload
			);
			return {
				...state,
				data: updatedlist,
			};
		default:
			return state;
	}
};
