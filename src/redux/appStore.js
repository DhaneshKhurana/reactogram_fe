import {createStore} from "redux";
import { cReducer } from "./combReducer";

export const appStore = createStore(cReducer);