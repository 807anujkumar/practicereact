 import Time from "./compannat/showtime";
 import Heading from "./compannat/heading";
 import Para from "./compannat/para";
import  "./App.css";
function App() {
  return <>

  <center>
  {/* <h1 className="heading">Bharat Clock</h1>
  <p className=" para text-primary">This clock show the time in the bharat at the all time</p>

<p className="para text-primary">this is the curent time : <span className='clock'>{time.toLocaleDateString()}- {time.toLocaleTimeString()}</span></p> */}
<Heading></Heading>
<Para></Para>

<Time></Time>
</center>
  </>

 }

export default App
