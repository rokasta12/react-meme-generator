import { Link } from "react-router-dom";
import { MemeCard, MemeCardList } from "../components/MemeCard";
import QuoteCard from "../components/QuoteCard";
import { useGetMemeImagesQuery } from "../store/api/neko.api";
import { setSelectedQuoteByID } from "../store/features/quote/quote.slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

type Props = {};

export default function Memes({}: Props) {
  const { quotes, selectedQuote } = useAppSelector((state) => state.quote);
  const dispatch = useAppDispatch();

  function setSelectedQuote(id: number) {
    dispatch(setSelectedQuoteByID(id));
  }
  const memeImages = useGetMemeImagesQuery();

  return (
    <div>
      <div className="flex  flex-col gap-5">
        <h4 className=" text-4xl">Memes</h4>
        <Link to={"/"}>
          <button>Go to Home</button>
        </Link>
      </div>
      <div>{memeImages.isLoading && <div>Loading...</div>}</div>
      <div >
        {memeImages.isSuccess && (
          <MemeCardList memes={memeImages.data?.results} />
        )}
      </div>
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
