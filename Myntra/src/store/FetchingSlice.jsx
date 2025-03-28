import {createSlice} from "@reduxjs/toolkit";
const FetchingSlice=createSlice({
  name:'fetching',
  initialState:{
    fetchDone:false,
    currentlyFetching:false,
  },
  reducers:{
    setFetchDone:(state)=>{
      return {...state,fetchDone:true};
    },
    setcurrentlyFetching:(state)=>{
      return {...state,currentlyFetching:true};
    },
    setFetchingFinished:(state)=>{
      return {...state,currentlyFetching:false};
    }
  }
})
export const FetchingSliceActions=FetchingSlice.actions;
export default FetchingSlice;