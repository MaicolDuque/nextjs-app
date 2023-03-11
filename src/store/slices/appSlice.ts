import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '@store/store'
import { CounterState } from './slices.models'


const initialState: CounterState = {
  uiConfig: {
    isOpenSideBar: false
  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsOpenSideBar: (state, action: PayloadAction<boolean>) => {
      state.uiConfig.isOpenSideBar = action.payload
    }
  },
  // Special reducer for hydrating the state
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.app,
      };
    },
  },

})

// Action creators are generated for each case reducer function
export const { setIsOpenSideBar } = appSlice.actions
export const isOpenSideBar = (state: AppState) => state.app.uiConfig.isOpenSideBar

export default appSlice.reducer
