import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCarts, updateCarts } from '../actions/cartsActions';

export interface ProductQuantity {
  productId: number;
  quantity: number;
}
interface CartsState {
  carts: ProductQuantity[];
  pending: boolean;
  error: string | object;
  totalPrice: number 
}
export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: ProductQuantity[];
}
const initialState: CartsState = {
  carts: [],
  pending: false,
  error: {},
  totalPrice: 0 // başlangıçta 0 olsun
};

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    setTotalPrice: (state, action)=> {
      state.totalPrice += Math.floor(action.payload)
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCarts.pending, state => {
        state.pending = true;
      })
      .addCase(getCarts.fulfilled, (state, action: PayloadAction<ProductQuantity[]>) => {
        state.carts = action.payload;
        state.pending = false;
      })
      .addCase(
        getCarts.rejected,
        (state, action: PayloadAction<{ error: string } | undefined>) => {
          state.error = action.payload ? action.payload.error : 'Unknown error';
        },
      )

      .addCase(updateCarts.pending, state => {
        state.pending = true;
      })
      .addCase(updateCarts.fulfilled, (state, action: PayloadAction<ProductQuantity>) => {
        state.carts = [...state.carts, action.payload]; // gelen bir dizi ve dedik ki sepetteki önceki ürüleri al, gelenleri de ekle
        state.pending = false;
      })
      .addCase(
        updateCarts.rejected,
        (state, action: PayloadAction<{ error: string } | undefined>) => {
          state.error = action.payload ? action.payload.error : 'Unknown error';
        },
      );
  },
});

export const {setTotalPrice} = cartSlice.actions
export default cartSlice.reducer;
