import {createSlice } from "@reduxjs/toolkit";

const WishSlice=createSlice({
  name:'wish',
  initialState:{
    wishList:[]
  },
  reducers:{
    addToWishList:(state,action)=>{
      return {...state,wishList:[...state.wishList,action.payload]};
    },
    removeFromWishList:(state,action)=>{
      return {...state,wishList:state.wishList.filter((item)=>item.id!==action.payload)};
    }
  }
})
export default WishSlice;
export const WishActions=WishSlice.actions;