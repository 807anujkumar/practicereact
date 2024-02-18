import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter } from "react-router-dom"
import App from './Router/App.jsx'
import CreatePost from './componant/createPost.jsx'
import Postlist from './componant/postlist.jsx'
 const router=createBrowserRouter([
{path:"/",element:<App></App> ,children:[
  
 { path:'/', element:<Postlist/>

},
{path:"/create-post", element:<CreatePost/>}
]

 

 }])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
