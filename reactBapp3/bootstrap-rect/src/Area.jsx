import Daimeter from "./Diameter"
 
 export default function Area()
{ 

    return <div>
{/* <div> the arae of teh circle is the = {data}</div>  */}

 <div> the diameter  of the circle  is the {Claculate(arr1, Arae1)}</div>

 {/* <Daimeter></Daimeter> */}
 
 {/* {arr1}; */}
 <Daimeter></Daimeter>
</div>

}
// export default Area;

let arr1=[1,2,3,4,5,6]


function Arae1(r)
{
    let Areaofc= Math.round(Math.PI*r*r);
    return <div>{Areaofc}</div>
}

function Claculate(arr,callback)
{
    let A=[]
    for(let i=0;i<arr.length;i++){

A.push(callback(arr[i]));
    }

    return <div>
        {A}
    </div>
}