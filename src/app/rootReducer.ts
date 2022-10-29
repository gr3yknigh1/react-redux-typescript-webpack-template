import { combineReducers } from "redux";
import { helloReducer } from "@/modules/hello";

export const rootReducer = combineReducers({
  hello: helloReducer,
});
