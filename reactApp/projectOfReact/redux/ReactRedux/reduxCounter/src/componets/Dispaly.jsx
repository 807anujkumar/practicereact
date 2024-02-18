import { useSelector } from "react-redux"


 

const Display=()=>{
    
    const counter=useSelector((store)=>store.Counter)
    return <>

    <div>Counter Value is the:{counter}</div>
    </>


}
export default Display