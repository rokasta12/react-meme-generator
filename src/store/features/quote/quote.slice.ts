import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { quoteAPI } from "../../api/quote.api";

export interface Quote {
  q: string;
  a: string;
  c: string;
  h: string;
}

interface QuoteState {
  quotes: Quote[];
  selectedQuote: Quote | null;
}

const intialState: QuoteState = {
  quotes: [],
  selectedQuote: null,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState: intialState,
  reducers: {
    setQuotes(state, action: PayloadAction<Quote[]>) {
      state.quotes = action.payload;
    },
    setSelectedQuoteByID(state, action: PayloadAction<string>) {
      state.selectedQuote = state.quotes.find(
        (quote) => quote.q === action.payload
      )!;
    },
  },
});

// create asyncThunk for fetching all quotes
export const getQuotes = createAsyncThunk(
  "quotes/get-all",
  async (_value, thunkAPI) => {
    /*     const response = await thunkAPI.dispatch(
      quoteAPI.endpoints.getQuotes.initiate({})
    ); */
    // console.log(response.data);
    // thunkAPI.dispatch(setQuotes(data));
  }
);

export const dummyQuotes = [
  {
    id: 1,
    description:
      "The best way to get started is to quit talking and begin doing.",
  },
  {
    id: 2,
    description:
      "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
  },
];

export const { setQuotes, setSelectedQuoteByID } = quoteSlice.actions;
export default quoteSlice.reducer;
