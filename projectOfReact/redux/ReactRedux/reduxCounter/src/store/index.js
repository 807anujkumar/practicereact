import {createStore} from"redux"

const INITIALVALUE={
    Counter:0,
    privacy:false
}
 function counterReducer(store=INITIALVALUE,action){

if(action.type==="increase"){
    
    return{ ...store,Counter:store.Counter +1}
 }
 else if(action.type==="decrease"){
    
    return{...store,Counter:store.Counter -1}
 }
return store
 }

 const counterStore = createStore(counterReducer)

export default counterStore