const Redux= require('redux');

 
 
 const INITIAL_VALUE={
    counter:0

 }

 const redux= require('redux');

 const reducer=(store =INITIAL_VALUE,action)=>{
   let Newvalue=store
if(action.type==="increament"){
   Newvalue={counter:store.counter+1}
}
else if( action.type==="Add"){
Newvalue={counter:store.counter + action.data.number}
}
return Newvalue
}

 const store= redux .createStore(reducer)

 const UIview=()=>{
const state= store.getState()
console.log(state)
 }

 store.subscribe(UIview)


 store.dispatch({type:"increament"})
 store.dispatch({type:"Add",
 data:{
   number:8
 }
}
 )
