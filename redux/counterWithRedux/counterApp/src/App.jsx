import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './componets/Heder'
import Dispaly from './componets/dispalyData'
import { Control } from './componets/controlRoom'
import Privacy from './componets/Privacy'
import Container from './componets/Container'
import { useSelector } from 'react-redux'
function App() {
   const privacy =useSelector((store) => store.PrivacyResult)

  return<> 
    <div class="px-4 py-5 my-5 text-center">   
    <div class="col-lg-6 mx-auto">
   <Container>
      <Header></Header>
      {privacy?<Privacy></Privacy>: <Dispaly></Dispaly>}
       <Control></Control>
       </Container>
    </div>
  </div>
 
  </>
  
}

export default App
