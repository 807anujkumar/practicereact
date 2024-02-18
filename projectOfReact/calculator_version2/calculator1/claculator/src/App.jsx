 import style from './App.module.css'
import Inpute from './componant/input'
import Buttom from './componant/buttom'
import { useState } from 'react'
 function App() {
   
     const[showInput,setInput]=useState("")
     function Buttonhandler(item,e){
          const newvalue=showInput +item
     setInput(newvalue)
          if(item ==="Ac" || item === "c"){
        setInput("");

          }
          else if(item==="DEL"){
              const arry=[...showInput]
              if(arry.length>0){
          arry[arry.length-1]= ""
          
setInput(arry.join(""));
          }
          else{
               alert("Plese Enter Number First")
               setInput(" ")
          }



          }
else if(item=="EN" || item == "="){
     let arr=[...showInput]
if(arr.length>0){
     setInput(eval(showInput));
}
else
{
alert("Plese Enter The Valid Number")
setInput(" ")
}
     
      
}
 
           
          
     }
     
  return <>
  <h2 style={{textAlign:"center"}}>calculator</h2>
  <center>
  <div className={style.container}> 
       <Inpute IntialValue={showInput}></Inpute>
       <Buttom onclick={Buttonhandler}></Buttom>
  
  </div>
  </center>



  </>
}

export default App
