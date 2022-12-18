import React from "react";
import { MemeImage } from "../store/features/meme-images/memeImages.slice";
import { useAppSelector } from "../store/hooks";

type Props = {
  meme: MemeImage;
};

export function MemeCard(props: Props) {
  const { meme } = props;
  const selectedQuote = useAppSelector((state) => state.quote.selectedQuote);
  return (
    <div className="flex flex-col px-1 py-2 relative ">
      <img
        loading="lazy"
        className="w-96 max-h-96 object-contain"
        src={meme.url}
      />
      <h4>{meme.artist_name}</h4>
      <p className=" absolute left-10 bottom-10 z-20 text-white">
        {selectedQuote?.q ?? "select quote"}
      </p>
    </div>
  );
}

type MemeListProps = {
  memes: MemeImage[];
};
export function MemeCardList(props: MemeListProps) {
  const { memes } = props;

  return (
    <div className="flex flex-wrap my-6 gap-3">
      {[...memes.slice(0, 3)].map((meme) => {
        return <MemeCard meme={meme} key={meme.url} />;
      })}
    </div>
  );
}
