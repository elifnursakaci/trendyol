import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/requests';
import {CATEGORIES_URL} from '../../service/urls';

const getCategories = createAsyncThunk<string[],void,{rejectValue: {error: string}}>(
  'categories/getCategories', async (_, {rejectWithValue}) => {
  try {
    const res = await getRequest<string[]>(CATEGORIES_URL, {}); // getRequest, string[] dizi döndürecek dedik dinamik yaptık !
    return res.data;
  } catch (error) {
    return rejectWithValue({error: (error as Error).message});
  }
});

export {getCategories}
