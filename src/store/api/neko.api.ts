import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NEKO_API } from "../../common/constants";
import { MemeImage } from "../features/meme-images/memeImages.slice";

export const nekoAPI = createApi({
  reducerPath: "deliveryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${NEKO_API}/`,
  }),
  endpoints: (builder) => ({
    getMemeImages: builder.query<{ results: MemeImage[] }, void>({
      query: () => ({
        url: "neko?amount=20",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMemeImagesQuery } = nekoAPI;

// hoook => use

// fetch => get  => Query

// react-query
