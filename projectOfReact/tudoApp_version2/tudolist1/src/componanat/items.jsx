 export default function Items({name, date})
{

    return <>
<div className="conatiner">

<div className="name">

           {name}
        </div>
        <div className="date"> {date}</div> 
        
         <div className="btm1"><button>Delete</button></div>

    </div>
         
     
    </>
}
