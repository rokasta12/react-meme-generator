import React from "react";
import { Quote } from "../store/features/quote/quote.slice";

type Props = {
  quote: Quote;
  isSelected?: boolean;
  onClick: (q: string) => void;
};

export default function QuoteCard(props: Props) {
  const { quote, isSelected, onClick } = props;

  return (
    <div
      onClick={() => onClick(quote.q)}
      className={`my-4 bg-slate-200 dark:bg-slate-900 w-96 px-3 py-6 rounded-md text-left
       ${
         isSelected ? "border-2 border-blue-500 border-solid" : "border-none"
       }} hover:scale-105 cursor-pointer transition ease-in-out
        delay-50 duration-150`}
    >
      <p className=" font-thin text-sm">{quote.a}</p>
      <h4>{quote.q}</h4>
    </div>
  );
}
