import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest, putRequest} from '../../service/requests';
import {CART_URL, CARTS_URL} from '../../service/urls';
import {Cart, ProductQuantity} from '../slice/cartsSlice';
import {Alert} from 'react-native';

const getCarts = createAsyncThunk<
  ProductQuantity[],
  {userId: number},
  {rejectValue: {error: string}}
>('carts/getCarts', async (params, {rejectWithValue}) => {
  try {
    const res = await getRequest<Cart[]>(
      `${CARTS_URL}${params.userId}`,
      params,
    );
    return res.data[0].products;
  } catch (error) {
    return rejectWithValue({error: (error as Error).message});
  }
});

// * ProductQuantity: Thunk'ın başarılı bir şekilde tamamlandığında döndüreceği veri tipi
// * { userId: number, date: string, products: ProductQuantity[] }: Thunk'a parametre olarak geçilecek veri tipi
// * { rejectValue: { error: string } }: Thunk bir hata ile karşılaştığında döndürülecek hata mesajının tipi
const updateCarts = createAsyncThunk<
  ProductQuantity,
  {userId: number; date: string; products: ProductQuantity[]},
  {rejectValue: {error: string}}
>('carts/updateCarts', async (params, {rejectWithValue}) => {
  try {
    const res = await putRequest<Cart>(`${CART_URL}${params.userId}`, {
      userId: params.userId,
      date: params.date,
      products: params.products,
    });
    if (res.status === 200) {
      Alert.alert('Ürün Sepete Eklendi', 'Ürünü sepette görüntülebilirsiniz.', [
        {
          text: 'Kapat',
          style: 'cancel',
        },
        {text: 'Tamam'},
      ]);
    }
    return res.data.products[0];
  } catch (error) {
    return rejectWithValue({error: (error as Error).message});
  }
});

export {getCarts, updateCarts};
