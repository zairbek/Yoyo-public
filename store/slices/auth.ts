import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import {AuthResponse} from "../../utils/api/types";
import {RootState} from "../store";
import {HYDRATE} from "next-redux-wrapper";


export interface UserState {
  data: AuthResponse | null;
}

const initialState: UserState = {
  data: null
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<AuthResponse>) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user
      }
    }
  }
})

export const { setUserData } = userSlice.actions

export const selectUserData = (state: RootState) => state.user.data

export const userReducer = userSlice.reducer;
