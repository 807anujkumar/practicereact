 import {AppName} from '../componant/AppName'
 import './App.css'
 import "bootstrap/dist/css/bootstrap.min.css"
 import Header from '../componant/Header'
 import Sidebar from '../componant/sidebar'
import Footer from '../componant/footer'
import Postlist from '../componant/postlist'
import CreatePost from '../componant/createPost'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
 import UIhandle from '../store/postListContaxt'
function App() {
  const[tab,settab]= useState("Home")
  const[login,setLogin] =useState("")
   
 return (<>
 <UIhandle>
     <AppName></AppName>
  <div className='main-App'>
  <div className='App'>
 <Sidebar settab={settab} tab={tab}></Sidebar> 

 <div className='header_post'>
         
<Header Login={setLogin} ></Header>
{login}
  {/* {tab==="Home" ?<div className='postlist'>
<Postlist></Postlist>
</div>:<CreatePost></CreatePost>} */}
<Outlet></Outlet>
 
</div>
</div>
 
 

<Footer></Footer>

  </div>
  </UIhandle>
   </>
  )
}
export default App
