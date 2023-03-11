import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import { appSlice } from '@store/slices/appSlice';

const makeStore = () => configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer
  },
  devTools: true,
});

export const wrapper = createWrapper<AppStore>(makeStore); // This wrapper eliminates the need for a Provider that we would use in a normal React application.

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

