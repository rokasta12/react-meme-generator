import React from "react";
import { Link } from "react-router-dom";
import { dummyQuotes, setQuotes } from "../store/features/quote/quote.slice";
import { useAppDispatch } from "../store/hooks";

type Props = {};

export default function Home({}: Props) {
  const dispatch = useAppDispatch();

  const loadQuotes = () => {
    dispatch(setQuotes(dummyQuotes));
  };

  return (
    <div>
      <div className="App">
        <h1>Vite + React</h1>
        <button onClick={() => loadQuotes()}>Load Quotes</button>
        <Link to={"/memes"}>
          <button>Go to memes</button>
        </Link>
      </div>
    </div>
  );
}
