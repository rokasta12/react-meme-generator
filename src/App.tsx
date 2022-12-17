import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { useAppDispatch } from "./store/hooks";
import { dummyQuotes, setQuotes } from "./store/features/quote/quote.slice";

import Home from "./views/Home";
import Memes from "./views/Memes";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();

  const loadQuotes = () => {
    dispatch(setQuotes(dummyQuotes));
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memes" element={<Memes />} />
    </Routes>
  );
}

export default App;
