import { createContext, useState ,useEffect,useReducer } from "react";

 export const PostListItem= createContext({
fetchData:false,
postlist:[],
addpost:()=>{},
deletepst:()=>{},
// Addserverpost:()=>{},
})

 function reducerMethod(curentvalue,action)
 {
  console.log(action,curentvalue)
  let NewItem=curentvalue;
if(action.type==="delet"){
NewItem=curentvalue.filter((item)=>item.title!==action.data.title)
}
 else if(action.type==="AddPost")
 {

  NewItem= [{title:action.data.post.title,body:action.data.post.body,tags:action.data.post.tags,reactions:action.data.post.reactions}, ...curentvalue]
 }
 else if(action.type==="serverPost"){
  NewItem= action.data.posts;
 }
return NewItem

 }

function UIhandle({children})
{
// const{deletepst}=useContext(PostListItem)
const[fetchData,setfetchData]=useState(false)
    const[postlist,dispatch]=useReducer(reducerMethod,[])

 function deletepst(title) {
const deletAction={
  type:"delet",
  data:{
    title
  }
}
dispatch(deletAction)

    }

     
function addpost(post){
  console.log(post)
const AddPostActions={
type:"AddPost",
data:{post}
 

     }
      
dispatch(AddPostActions)
    

}
function Addserverpost(posts){

      const serverpostAction={
        type:"serverPost",
        data:{posts}
      }
      dispatch(serverpostAction)
    }

    useEffect(()=>{
      setfetchData(true)
      fetch('https://dummyjson.com/posts').then((respons)=>respons.json()).then((responce)=>{Addserverpost(responce.posts) 
      setfetchData(false)})
      },[])



return<>
<PostListItem.Provider value={{postlist,deletepst,addpost,fetchData}}>{children}</PostListItem.Provider>
</>
 

}

export default UIhandle
 