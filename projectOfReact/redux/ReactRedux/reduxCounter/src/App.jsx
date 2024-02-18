import"bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Heading from "./componets/Header"
import Display from "./componets/Dispaly"
import Controle from "./componets/countrols"
function App() {

  return (
    <>
    <div class="px-4 py-5 my-5 text-center">
     <Heading></Heading>
    <div class="col-lg-6 mx-auto">
      <Display></Display>
       <Controle></Controle>
    </div>
  </div>


    </>
  )
}

export default App