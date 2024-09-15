import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {
  getUserInfo,
  LoginResponse,
  loginUser,
  logOutUser,
} from '../actions/authActions';
import {AuthTypes, UserInfo} from '../../models/slices/authSliceTypes';

const initialState: AuthTypes = {
  token: '',
  isLogin: false,
  pending: false,
  error: {},
  userInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoginCheck: (state, action) => {
      state.token = action.payload;
      if (action.payload) state.isLogin = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.pending = true;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.token = action.payload.token;
          state.pending = false;
          state.isLogin = true;
        },
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
        state.pending = false;
      })

      .addCase(logOutUser.fulfilled, state => {
        state.isLogin = false;
        state.token = '';
      })

      .addCase(getUserInfo.pending, state => {
        state.pending = true;
      })
      .addCase(
        getUserInfo.fulfilled,
        (state, action: PayloadAction<UserInfo>) => {
          state.userInfo = action.payload;
          state.pending = false;
        },
      )
      .addCase(getUserInfo.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
        state.pending = false;
      });
  },
});

export const {userLoginCheck} = authSlice.actions;
export default authSlice.reducer;
