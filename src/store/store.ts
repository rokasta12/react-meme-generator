import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { quoteAPI } from "./api/quote.api";
import { nekoAPI } from "./api/neko.api";

import quoteReducer from "./features/quote/quote.slice";
import memeImageReducer from "./features/meme-images/memeImages.slice";

const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    /* [quoteAPI.reducerPath]: quoteAPI.reducer, */
    [nekoAPI.reducerPath]: nekoAPI.reducer,
    quote: quoteReducer,
    memeImages: memeImageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      /* .concat(quoteAPI.middleware) */
      .concat(nekoAPI.middleware)
      .prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
