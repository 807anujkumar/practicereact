 import Heading from './componanat/Heading'
 import Search from './componanat/tudoAdd'
 import Geteitems from './componanat/getitems'
import './App.css'

function App() {

  const items=[
    {
      Name:"milk",
      duedate:"2/09/2021"

    },
    {
      Name:"good milk",
      duedate:"2/09/2022"
      
    },
    {
      Name:"reen vegetable",
      duedate:"2/09/2023"
      
    },
    {
      Name:"patato",
      duedate:"2/09/2024"
      
    }
  ]
 
  return <>
  <div className='App'>
  <Heading></Heading>
<Search></Search>
<Geteitems geteitem={items}></Geteitems>
  </div>
</>
  
}

export default App
