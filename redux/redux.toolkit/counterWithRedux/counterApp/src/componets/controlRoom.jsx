import { useRef } from "react"
import { useDispatch, } from "react-redux"
  import { newcounterSlice } from "../store/counter"
 import {privacyActions} from "../store/privacy"

 export function Control(){
    const dispatch= useDispatch()
    const inputValue= useRef()
     function addhandler(){
 dispatch(newcounterSlice.increament())

}
function Minushandler(){
    dispatch(newcounterSlice.decrreament())
    

}
function Additonhandler(){
 dispatch(newcounterSlice.addtion({
    num:inputValue.current.value
 }))
 
inputValue.current.value=""
}
function substractionhandler(){

dispatch(newcounterSlice.subtractions({num:inputValue.current.value}))
     
    inputValue.current.value=""
}
     
function delethandler()
{
 dispatch(
    newcounterSlice.delete()

 )
}
function privacy_handler(){
dispatch(privacyActions.enjoing())
    
}
 
    return <>
     <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={addhandler}> +1</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={Minushandler}>-1</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={delethandler}>DEL</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={privacy_handler}>Enjoy</button>


      </div>


      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center  second_btm">
      <input type="number" placeholder="Enter the number" className="input" ref={inputValue}/> 
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={Additonhandler}>Add</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={substractionhandler}>Minus</button>

      </div>

       



      
    </>
}