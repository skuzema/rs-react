import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardsArray } from '../models/IArticles';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org' }),
  endpoints: (builder) => ({
    getArticles: builder.query<
      CardsArray,
      {
        q?: string;
        sortBy?: string;
        sources?: string;
        page?: string;
        pageSize?: string;
        searchIn?: string;
        apiKey?: string;
      }
    >({
      query: (arg) => {
        let { q } = arg;
        const { sortBy, sources, page, pageSize, searchIn, apiKey } = arg;
        q = q === '' ? '*' : q;
        return {
          url: `/v2/everything`,
          params: { q, sortBy, sources, page, pageSize, searchIn, apiKey },
        };
      },
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
