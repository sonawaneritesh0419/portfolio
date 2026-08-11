import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import contactReducer from "./contactSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    contact: contactReducer,
    theme: themeReducer,
  },
});
