import { createSlice } from '@reduxjs/toolkit'

const data=localStorage.getItem("test2")
const change=JSON.parse(data) 
const initialState = {
   dress0: change,
   top1: 37,
   kurthi2: 62, 
   anarkali3: 71, 
   choli4: 99,
   lehanga5 :75
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementdresszero: (state,action) => {
      state.dress0 += action.payload
      localStorage.setItem("test2",JSON.stringify(state.dress0))
    }, 
    incrementtopone: (state,action) => {
      state.top1 += action.payload
    },
    incrementcholifour: (state) => {
      state.choli4 += 1
    },
    decrementkurthitwo: (state,action) => {
      state.kurthi2 -= action.payload
    },
    decrementanarkalithree: (state) => {
      state.anarkali3 -= 1
    },
    decrementlehangasix: (state) => {
      state.lehanga5 -= 5
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { incrementdresszero, incrementtopone, incrementcholifour, decrementkurthitwo,decrementanarkalithree,decrementlehangasix, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
 