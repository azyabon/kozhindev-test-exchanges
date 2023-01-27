import { configureStore } from "@reduxjs/toolkit";
import { currencies } from "./currencies";

export const store = configureStore({
  reducer: {
    currencies: currencies.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
