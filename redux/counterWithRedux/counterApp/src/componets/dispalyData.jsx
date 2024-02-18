import { useSelector } from "react-redux"

const Dispaly=()=>{
    const counter= useSelector((store)=>store.counter)
    return <>
    <h6>the current valu is: {counter}</h6>

    </>
}
export default Dispaly