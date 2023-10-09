import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const cReducer = combineReducers({userReducer});