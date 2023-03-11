import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '@store/store'
import { CounterState } from './slices.models'

const initialState: CounterState = {
  value: 30,
  uiConfig: {
    isOpenSideBar: false,
    test: 'Sisas'
  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
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
export const { increment, setIsOpenSideBar } = appSlice.actions
export const isOpenSideBar = (state: AppState) => state.app.uiConfig.isOpenSideBar
export const testSelector = (state: AppState) => state.app.uiConfig.test
export const valueSel = (state: AppState) => state.app.value

export default appSlice.reducer
