import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { noteAPI } from "./noteQuerySlice";


const store = configureStore({
  reducer: {
    [noteAPI.reducerPath]: noteAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteAPI.middleware),
});
setupListeners(store.dispatch)
export default store;