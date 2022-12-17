import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QUOTE_API } from "../../common/constants";

export const quoteAPI = createApi({
  reducerPath: "deliveryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${QUOTE_API}/api/`,
    prepareHeaders(headers, api) {
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      headers.set("User-Agent", "DeliveryMobile-Native");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getQuotes: builder.mutation({
      query: () => ({
        url: "/quotes",
        method: "GET",
      }),
    }),
  }),
});
