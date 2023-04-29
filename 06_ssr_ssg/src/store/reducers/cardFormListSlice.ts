import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TPCardForm } from '../../models/IArticles';

interface CardFormListState {
  forms: TPCardForm[];
}

const initialState: CardFormListState = {
  forms: [],
};

export const cardFormListSlice = createSlice({
  name: 'cardFormList',
  initialState,
  reducers: {
    addCardForm: (state, action: PayloadAction<TPCardForm>) => {
      state.forms.push(action.payload);
    },
    clearCardForms: (state) => {
      state.forms = [];
    },
  },
});

export const { addCardForm, clearCardForms } = cardFormListSlice.actions;
export default cardFormListSlice.reducer;
