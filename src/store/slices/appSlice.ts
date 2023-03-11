import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '@store/store'
import { CounterState } from './slices.models'

const initialState: CounterState = {
  value: 30,
  aloId: '',
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
      state.value += 1
    },
    setAloId: (state, action: PayloadAction<string>) => { state.aloId = action.payload },
    setIsOpenSideBar: (state, action: PayloadAction<boolean>) => { state.uiConfig.isOpenSideBar = action.payload }
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
export const { increment, setIsOpenSideBar, setAloId } = appSlice.actions
export const isOpenSideBar = (state: AppState) => state.app.uiConfig.isOpenSideBar
export const testSelector = (state: AppState) => state.app.uiConfig.test
export const valueSel = (state: AppState) => state.app.value
export const getAloId = (state: AppState) => state.app.aloId

export default appSlice.reducer
