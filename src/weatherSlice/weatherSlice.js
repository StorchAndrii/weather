import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import baseService from "../axios/baseService";
import { weather } from "../model/model";

const initialState = {
  weather,
  city: "",
};

export const getWeather = createAsyncThunk(
  "weatherSlice/getWeather",
  async (city) => {
    const { data } = await baseService.get("/v1/forecast.json", {
      params: {
        key: process.env.REACT_APP_API_KEY,
        q: city,
        days: 3,
        lang: "ru",
      },
    });
    return data;
  }
);

export const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getWeather.pending, (state, { meta }) => {
      state.city = meta.arg;
    });
    builder.addCase(getWeather.fulfilled, (state, { payload }) => {
      state.weather = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
