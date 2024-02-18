import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './componets/Heder'
import Dispaly from './componets/dispalyData'
import { Control } from './componets/controlRoom'
import Container from './componets/Container'
import Apnaprivacy from './componets/ApnaPrivacy'
import { useSelector } from 'react-redux'
function App() {
   
const privacy=useSelector((store)=>store.Privacy)
console.log(privacy)
  return<> 
    <div class="px-4 py-5 my-5 text-center">   
    <div class="col-lg-6 mx-auto">
   <Container>
      <Header></Header>
 {privacy?<Apnaprivacy></Apnaprivacy>: <Dispaly></Dispaly>}
      <Control></Control>
       </Container>
    </div>
  </div>
 
  </>
  
}

export default App
