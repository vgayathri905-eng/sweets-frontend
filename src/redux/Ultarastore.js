import { configureStore } from '@reduxjs/toolkit'
import counterdata from "./counterslice"
import cartReducer from './cartslice';
export const ultarastore = configureStore({
  reducer: {
    counter:counterdata,
    cart:cartReducer
  },
})  