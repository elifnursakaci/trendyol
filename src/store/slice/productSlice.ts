import {createSlice} from '@reduxjs/toolkit';
import {
  getBestSellerProducts,
  getNewArrivalProducts,
  getProducts,
} from '../actions/productActions';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: any;
  rate?: number;
}
interface ProductState {
  products: Product[];
  newArrival: Product[];
  bestSeller: Product[];
  pending: boolean;
  error: string | object;
}
const initialState: ProductState = {
  products: [],
  newArrival: [],
  bestSeller: [],
  pending: false,
  error: {},
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeProduct: state => {
      state.products = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
          state.pending = false;
        },
      )
      .addCase(
        getProducts.rejected,
        (state, action: PayloadAction<{error: string} | undefined>) => {
          state.error = action.payload ? action.payload.error : 'Unknown error';
        },
      )

      .addCase(getNewArrivalProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getNewArrivalProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.newArrival = action.payload;
          state.pending = false;
        },
      )
      .addCase(
        getNewArrivalProducts.rejected,
        (state, action: PayloadAction<{error: string} | undefined>) => {
          state.error = action.payload ? action.payload.error : 'Unknown error';
        },
      )

      .addCase(getBestSellerProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getBestSellerProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.bestSeller = action.payload;
          state.pending = false;
        },
      )
      .addCase(
        getBestSellerProducts.rejected,
        (state, action: PayloadAction<{error: string} | undefined>) => {
          state.error = action.payload ? action.payload.error : 'Unknown error';
        },
      );
  },
});

export const {removeProduct} = productSlice.actions;
export default productSlice.reducer;
