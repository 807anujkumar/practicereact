import style from "./buttom.module.css"
  export default function Buttom()
 {
    let items=["c","1","2", "+",
    "3","4","-", "5",
    "6","*","7", "8","/","9","=", "9",
    "0","Ac","DEL", "EN"]
    return<>
    <div className={style.btmcontainer}>
        {
            items.map((item,index)=><button key={index}className={style.btm}>{item}</button>
            )
        }
        
        </div> 
    </>

 }