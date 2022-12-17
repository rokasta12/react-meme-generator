import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Quote {
  id: number;
  description: string;
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
    setSelectedQuoteByID(state, action: PayloadAction<number>) {
      state.selectedQuote = state.quotes.find(
        (quote) => quote.id === action.payload
      )!;
    },
  },
});

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
