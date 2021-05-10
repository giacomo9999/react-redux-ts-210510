import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { notesReducer } from "./reducers/notesReducer";

export const store = createStore(
  notesReducer,
  composeWithDevTools(applyMiddleware())
);
