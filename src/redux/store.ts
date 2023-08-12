import { configureStore } from '@reduxjs/toolkit';

import { api } from './api/apiSlice';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/products/productsSlice';
import userReducer from './features/user/userSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
