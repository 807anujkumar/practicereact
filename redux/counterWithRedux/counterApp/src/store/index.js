import {createStore} from "redux"
const INITIALVALUE={
    counter:0,
    PrivacyResult:false

}
function counterReducer( store=INITIALVALUE, action){
    let newstore=store
    if(action.type==="Add"){
        newstore={counter:Number(store.counter+1)}
        
    }
    else if(action.type==="Minus"){
        newstore={counter:Number(store.counter-1)}
        
    }
    else if(action.type==="Addition"){
        newstore={counter:store.counter+Number(action.data.number)}
        
    }
    else if(action.type==="subtractions"){
        newstore={counter:store.counter- Number(action.data.number)}
        
    }
    else if(action.type==="delet"){
        newstore={counter:store.counter=0}
        
    }
    else if(action.type==="privacy"){
         
         return{...newstore, PrivacyResult:!store.PrivacyResult}
    }
    return newstore
}

const createCounter= createStore(counterReducer)

export default createCounter
