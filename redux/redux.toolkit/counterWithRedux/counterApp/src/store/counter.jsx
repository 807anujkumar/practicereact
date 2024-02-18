import { createSlice } from "@reduxjs/toolkit"

const CounterSlice=createSlice({

    name:"counter",
  initialState:{
 CounterVal:0
  },
    reducers:{
     increament:(store)=>{
      store.CounterVal++

     },
     decrreament:(store)=>{
          store .CounterVal--

     },
     addtion:(store,action)=>{
         store.CounterVal+= Number(action.payload.num)

     },
     subtractions:(store, action)=>
     {
         store.CounterVal-=Number(action.payload.num)


     },
     delete:(store)=>{
         store.CounterVal=0
     }
}

})
export const  newcounterSlice = CounterSlice.actions
export default CounterSlice