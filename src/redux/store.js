import { combineReducers, configureStore } from "@reduxjs/toolkit";

/**call reducers */
import questionReducer from "./question_reducer";
import { resultReducer } from "./resultReducer";

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});
