import { createSlice } from "@reduxjs/toolkit";

const BagSlice=createSlice({
  name:'bag',
  initialState:[],
  reducers:{
    addTobag:(state,action)=>{
      state.push(action.payload);
    },
    removeFrombag:(state,action)=>{
      return state.filter(itemid=>itemid!=action.payload);
    }
  }
})
export default BagSlice;
export const BagActions=BagSlice.actions;