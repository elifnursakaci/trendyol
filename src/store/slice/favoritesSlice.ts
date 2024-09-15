import {createSlice} from '@reduxjs/toolkit';
import {Product} from './productSlice';

interface FavoritesTypes {
  favorites: Product[];
}
const initialState: FavoritesTypes = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action)=> {
      state.favorites = state.favorites.filter((item)=> item.id !== action.payload)
    }
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
