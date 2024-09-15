import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/requests';
import {
  BEST_SELLER_PRODUCTS_URL,
  CATEGORY_URL,
  NEW_ARRIVAL_PRODUCTS_URL,
} from '../../service/urls';
import {Product} from '../slice/productSlice';

interface GetProductsParams {
  category: string;
}

const getProducts = createAsyncThunk<
  Product[],
  GetProductsParams,
  {rejectValue: {error: string}}
>(
  'products/getProducts',
  async (params: GetProductsParams, {rejectWithValue}) => {
    try {
      const res = await getRequest<Product[]>(
        `${CATEGORY_URL}/${params.category}`,
        params,
      );
      return res.data;
    } catch (error) {
      return rejectWithValue({error: (error as Error).message});
    }
  },
);

const getNewArrivalProducts = createAsyncThunk<
  Product[],
  object,
  {rejectValue: {error: string}}
>(
  'products/getNewArrivalProducts',
  async (params: object, {rejectWithValue}) => {
    try {
      const res = await getRequest<Product[]>(NEW_ARRIVAL_PRODUCTS_URL, params);
      return res.data;
    } catch (error) {
      return rejectWithValue({error: (error as Error).message});
    }
  },
);

const getBestSellerProducts = createAsyncThunk<
  Product[],
  object,
  {rejectValue: {error: string}}
>(
  'products/getBestSellerProducts',
  async (params: object, {rejectWithValue}) => {
    try {
      const res = await getRequest<Product[]>(BEST_SELLER_PRODUCTS_URL, params);
      return res.data;
    } catch (error) {
      return rejectWithValue({error: (error as Error).message});
    }
  },
);

export {getProducts, getNewArrivalProducts, getBestSellerProducts};
