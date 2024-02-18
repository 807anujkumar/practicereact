 import Items from "./items"
export default function Geteitems({geteitem}){

    // let ietms=geteitem.map((first,index)=> <h4>{first.Name}</h4>
    // )
    // let ietms1=geteitem.map((first,index)=> <h4>{first.Name} {first.duedate}</h4>
    // )
     

return<>
{geteitem.map((ietm)=><Items name={ietm.Name} date={ietm.duedate}></Items>)}

</>
}