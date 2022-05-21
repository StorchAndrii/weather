import { configureStore } from "@reduxjs/toolkit";

import weatherSlice from "../weatherSlice/weatherSlice";

export const store = configureStore({
  reducer: {
    weatherSlice,
  },
});
