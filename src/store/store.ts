import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import { appSlice } from '@store/slices/appSlice';
import { apiSlice } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const makeStore = () => configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  devTools: true,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(makeStore().dispatch)

export const wrapper = createWrapper<AppStore>(makeStore); // This wrapper eliminates the need for a Provider that we would use in a normal React application.

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

