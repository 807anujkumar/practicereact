let Time=()=>{
    let show=new Date()

    return<p  className="paar">this is the timig of the bharat in the all time : <span className="clock">{ show.toLocaleDateString() }-{show.toLocaleTimeString()}</span></p>
}
export default Time;
