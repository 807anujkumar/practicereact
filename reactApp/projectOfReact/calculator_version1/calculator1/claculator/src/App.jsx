 import style from './App.module.css'
import Inpute from './componant/input'
import Buttom from './componant/buttom'
 function App() {
   

  return <>
  <h2 style={{textAlign:"center"}}>calculator</h2>
  <center>
  <div className={style.container}> 
       <Inpute></Inpute>
       <Buttom></Buttom>
  
  </div>
  </center>



  </>
}

export default App
