import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['comment'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://technet-server-seven.vercel.app/',
  }),
  endpoints: () => ({}),
});
