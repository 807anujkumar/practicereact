import ApnaPrivacy from "./privacy"
import CounterSlice from "./counter"
import {configureStore,} from "@reduxjs/toolkit"

 const counterconfi= configureStore({
    reducer:{
        counter:CounterSlice.reducer,
        Privacy:ApnaPrivacy.reducer
}
    
})
export default counterconfi
 








































// import {createStore} from "redux"

// const INITIALVALUE={
//     counter:0

// }
// function counterReducer( store=INITIALVALUE, action){
//     let newstore=store
//     if(action.type==="Add"){
//         newstore={counter:store.counter+1}
        
//     }
//     else if(action.type==="Minus"){
//         newstore={counter:store.counter-1}
        
//     }
//     else if(action.type==="Addition"){
//         newstore={counter:store.counter+Number(action.data.number)}
        
//     }
//     else if(action.type==="subtractions"){
//         newstore={counter:store.counter- Number(action.data.number)}
        
//     }
//     else if(action.type==="delet"){
//         newstore={counter:store.counter=" "}
        
//     }
//     return newstore
// }

// const createCounter= createStore(counterReducer)

// export default createCounter
