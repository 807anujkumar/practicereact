import { useSelector } from "react-redux"

const Dispaly=()=>{
const {CounterVal}= useSelector((store)=>store.counter)
    return <>
    <h6>the current valu is: {CounterVal}</h6>

    </>
}
export default Dispaly