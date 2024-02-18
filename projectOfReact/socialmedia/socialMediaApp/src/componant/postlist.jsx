import { useContext, useEffect, useState } from "react"
import Post from "./post"
import { PostListItem } from "../store/postListContaxt"
import WlecomMassege from "./welcomMassege"
import { faMountainCity } from "@fortawesome/free-solid-svg-icons"
import Loading from "./Loding"
 
function Postlist()
{
  
     const{postlist,fetchData}=useContext(PostListItem) 
         

// const[showpost,setshowpost]=useState(false)

// if(!showpost){
//      async function posthandle()
//      {
//         const data= await fetch('https://dummyjson.com/posts')
//           const responce= await data.json()
//           Addserverpost(responce.posts);
//           setshowpost(true);

//      }

//      posthandle()
//      setshowpost(true);

// //  fetch('https://dummyjson.com/posts').then((respons)=>respons.json()).then((responce)=>Addserverpost(responce.posts))
      
//  setshowpost(true);
// }
return<>
    {fetchData && <Loading/>}
    {!fetchData && postlist.length==0 &&<WlecomMassege></WlecomMassege>}
 {!fetchData && postlist.map((item)=><Post title={item} key={item.id} ></Post>)}  
 </>


}
export default Postlist