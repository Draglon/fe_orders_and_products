import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./modal";

export const makeStore = () => configureStore({
  reducer: {
    modal: modalReducer,
  },
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
