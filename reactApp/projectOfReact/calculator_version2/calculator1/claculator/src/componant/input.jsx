 import style from "./input.module.css"
 const Inpute=({IntialValue})=>{
    return<>
      <input type="text" className={style.input} placeholder='Enter you ideas' value={IntialValue} readOnly required/>
      

    </>
 }
 export default Inpute
