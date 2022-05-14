import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseService from "../axios/baseService";
import { weather } from "../axios/model";

const initialState = {
  // тут можно оставить просто weather. Перечитай еще раз синтаксис ES6
  weather: weather,
};

export const getWeather = createAsyncThunk(
  "weatherSlice/getWeather",
  async () => {
    // оооо тут мясо)
    // во-первых тебе не нужны плюсы, если ты пишешь в этих специальных кавычках
    // во вторых у axios параметры GET метода передаются так:
    // const { data } = await baseService.get('/v1/forecast.json', {
    //   params: {
    //     key: process.env.REACT_APP_API_KEY,
    //     q: 'Киев',
    //     days: 3,
    //     lang: 'ru'
    //   }
    // })
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
