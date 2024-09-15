import {createSlice} from '@reduxjs/toolkit';
import { getCategories } from '../actions/categoriesActions';
import type {PayloadAction} from '@reduxjs/toolkit';

interface CategoriesTypes {
  categories: string[];
  selectedCategory: string,
  pending: boolean;
  error: string | object;
}
const initialState: CategoriesTypes = {
  categories: [],
  selectedCategory: "men's clothing",
  pending: false,
  error: {},
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCategory: (state, action)=> {
      state.selectedCategory = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.categories = action.payload;
          state.pending = false;
        },
      )
      .addCase(getCategories.rejected, (state, action: PayloadAction<{ error: string } | undefined>) => {
        state.error = action.payload ? action.payload.error : 'Unknown error';
      })
  }
});

export const {changeCategory} = categoriesSlice.actions
export default categoriesSlice.reducer;
