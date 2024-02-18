import { useDispatch } from "react-redux"

function Controle(){
    const Dispatch= useDispatch()
    function IncreasHandler()
    {
        Dispatch({
            type:"increase"
        })


    }
    function decreaseHandler(){
 Dispatch({
        type:"decrease"
    })
}
    return<>

<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={IncreasHandler}>Increase</button>
    <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={decreaseHandler}>Decrease</button>
      </div>
</>
}
export default Controle