import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

 export function Control(){
    const dispatch= useDispatch()
    const inputValue= useRef()
     function addhandler(){
 dispatch({
    type:"Add"
 })

}
function Minushandler(){
    dispatch({
        type:"Minus"
     })
    

}
function Additonhandler(){
 dispatch({
    type:"Addition",
    data:{
        number:inputValue.current.value
    }
})
inputValue.current.value=""
}
function substractionhandler(){

    dispatch({
        type:"subtractions",
        data:{
            number:inputValue.current.value
        }
})
    
    inputValue.current.value=""
}
function delethandler()
{
 dispatch({
    type:"delet"
}
 )
}
function handleprivacy()
{
    dispatch({
        type:"privacy"
    })
}
 
return <>
     <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={addhandler}> +1</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={Minushandler}>-1</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={delethandler}>DEL</button>
        <button type="button" class="btn btn-outline-info btn-lg px-4" onClick={handleprivacy}>Enjoy</button>


 
      </div>
<div class="d-grid gap-2 d-sm-flex justify-content-sm-center  second_btm">
      <input type="number" placeholder="Enter the number" className="input" ref={inputValue}/> 
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={Additonhandler}>Add</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={substractionhandler}>Minus</button>

      </div>

       



      
    </>
}