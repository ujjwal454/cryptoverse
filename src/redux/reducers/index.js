import { combineReducers } from "redux";
import { StatReducer } from "./statReducer";
import { coinsReducer } from "./CoinsReducers";
import { newsReducer } from "./newsReducer";
import { detailReducer } from "./detailReducer";
import { notesReducer } from "./notesReducers";
export const rootReducer = combineReducers({
	stats: StatReducer,
	coins: coinsReducer,
	news: newsReducer,
	details: detailReducer,
	notes: notesReducer,
});
