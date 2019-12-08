import React from "react";
import { createStore } from "redux";
import meal_app from "./_reducers";
import { Provider } from "react-redux";

export const store = createStore(meal_app);

export default function ReduxProvider(props) {
  <Provider store={store}>{props.children}</Provider>;
}
