import { configureStore } from '@reduxjs/toolkit';

import queryParamReducer from './reducers/queryParamSlice';
import cardFormListReducer from './reducers/cardFormListSlice';
import { articlesApi } from '../services/articlesSevice';

export const store = configureStore({
  reducer: {
    queryParam: queryParamReducer,
    form: cardFormListReducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(articlesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
