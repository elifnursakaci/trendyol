import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest, postRequest} from '../../service/requests';
import {LOGIN_URL, USER_URL} from '../../service/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserInfo } from '../../models/slices/authSliceTypes';

export interface LoginResponse {
  token: string;
}

const loginUser = createAsyncThunk<LoginResponse, object>(
  'auth/loginUser',
  async (params: object, {rejectWithValue}) => {
    try {
      const res = await postRequest<LoginResponse>(LOGIN_URL, params);
      await AsyncStorage.setItem('token', res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue({error: (error as Error).message});
    }
  },
);

const logOutUser = createAsyncThunk('auth/logOutUser', async () => {
  await AsyncStorage.removeItem('token');
});

const getUserInfo = createAsyncThunk<UserInfo, { userId: number }>(
  'auth/getUserInfo',
  async (params, { rejectWithValue }) => {
    try {
      const res = await getRequest<UserInfo>(`${USER_URL}/${params.userId}`, params);      
      return res.data;
    } catch (error) {
      return rejectWithValue({ error: (error as Error).message });
    }
  }
);

export {loginUser, logOutUser, getUserInfo};
