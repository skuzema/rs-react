import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { SearchParams } from '../../models/IArticles';
import { _apiKey } from '../../services/app_keys';

const initialState: SearchParams = {
  q: '',
  sortBy: 'publishedAt',
  sources: '',
  page: '1',
  pageSize: '100',
  searchIn: 'title',
  apiKey: _apiKey,
};

export const queryParamSlice = createSlice({
  name: 'queryParam',
  initialState,
  reducers: {
    setQueryParam: (state, action: PayloadAction<SearchParams>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setQueryParam } = queryParamSlice.actions;
export const queryParam = (state: RootState) => state.queryParam;
export default queryParamSlice.reducer;
