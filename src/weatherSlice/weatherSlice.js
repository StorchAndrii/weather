import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseService from "../axios/baseService";
import { weather } from "../axios/model";

const initialState = {
  weather: weather,
};

export const getWeather = createAsyncThunk(
  "weatherSlice/getWeather",
  async () => {
    const { data } = await baseService.get(
      `/v1/forecast.json?` +
        `key=${process.env.REACT_APP_API_KEY}` +
        `&q=Киев` +
        `&days=3&lang=ru`
    );
    return data;
  }
);

export const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, { payload }) => {
      state.weather = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
