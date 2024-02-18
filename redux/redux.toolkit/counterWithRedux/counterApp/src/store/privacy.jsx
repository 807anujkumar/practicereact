import {createSlice } from "@reduxjs/toolkit";

 const ApnaPrivacy= createSlice({
    name:"Privacy",
initialState:false,
reducers:{
    enjoing:(state)=>{
        return state= !state
    }
}

 })
 
   export const privacyActions= ApnaPrivacy.actions
   export default ApnaPrivacy