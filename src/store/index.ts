import {configureStore} from '@reduxjs/toolkit';
import productReducer from './slice/productSlice';
import categoriesReducer from './slice/categoriesSlice';
import cartsReducer from './slice/cartsSlice';
import favoritesReducer from './slice/favoritesSlice';
import authReducer from './slice/authSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoriesReducer,
    carts: cartsReducer,
    favorites: favoritesReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
