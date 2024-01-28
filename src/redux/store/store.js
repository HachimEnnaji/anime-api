import { configureStore } from "@reduxjs/toolkit";
import { animeReducer } from "../reducers/animeSlice";

export const store = configureStore({
  anime: animeReducer,
});
