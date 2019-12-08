import React from "react";
import { createStore, combineReducers } from "redux";
import meals_app, { mealsReducer } from "./_reducers";
import { Provider } from "react-redux";

export const store = createStore(combineReducers({ meals: mealsReducer }));

export default function ReduxProvider(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
