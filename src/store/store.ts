import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { quoteAPI } from "./api/quote.api";
import quoteReducer from "./features/quote/quote.slice";

const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    [quoteAPI.reducerPath]: quoteAPI.reducer,
    quote: quoteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(quoteAPI.middleware)
      .prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
