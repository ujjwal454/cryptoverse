import * as types from "../constants";

export const createNotes = (note) => {
	return {
		type: types.CREATENOTE,
		payload: note,
	};
};

export const deleteNote = (id) => {
	return {
		type: types.DELETENOTE,
		payload: id,
	};
};
