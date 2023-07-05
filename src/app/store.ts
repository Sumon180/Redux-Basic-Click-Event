// store.ts
import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "../features/ButtonSlice";

const store = configureStore({
  reducer: {
    button: buttonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
