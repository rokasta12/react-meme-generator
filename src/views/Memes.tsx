import React from "react";
import { Link } from "react-router-dom";
import QuoteCard from "../components/QuoteCard";
import { setSelectedQuoteByID } from "../store/features/quote/quote.slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

type Props = {};

export default function Memes({}: Props) {
  const { quotes, selectedQuote } = useAppSelector((state) => state.quote);
  const dispatch = useAppDispatch();

  function setSelectedQuote(id: number) {
    dispatch(setSelectedQuoteByID(id));
  }

  return (
    <div>
      Memes
      <Link to={"/"}>
        <button>Go to Home</button>
      </Link>
      <div>
        {quotes.map((quote) => {
          return (
            <QuoteCard
              onClick={setSelectedQuote}
              quote={quote}
              key={quote.id}
              isSelected={selectedQuote?.id === quote.id}
            />
          );
        })}
      </div>
    </div>
  );
}
