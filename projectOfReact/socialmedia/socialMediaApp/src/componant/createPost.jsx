import { useContext, useRef } from "react"
import { PostListItem } from "../store/postListContaxt"
import { useNavigate } from "react-router-dom"

function CreatePost()
{
  const Navigate=useNavigate()
  const{addpost}=useContext(PostListItem)
  const IdElement=useRef()
  const TitleElement=useRef()
  const textElement=useRef()
  const tagElement=useRef()
  const reactionElement=useRef()
function Newpost(event){
  event.preventDefault();
// const userId=IdElement.current.value;
// const title=TitleElement.current.value;
// const body=textElement.current.value;
// const tags=tagElement.current.value.split(" ");
// const reactions=reactionElement.current.value;


fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type':'application/json' },
  body: JSON.stringify({
     userId:IdElement.current.value,
    title:TitleElement.current.value,
    body:textElement.current.value,
  tags:tagElement.current.value.split(" "),
    reactions:reactionElement.current.value,
    /* other post data */
  })
}).then(res => res.json()).then((post)=>{addpost(post)
Navigate("/")
});

 IdElement.current.value=" "
TitleElement.current.value=" "
textElement.current.value=" "
tagElement.current.value=" "
reactionElement.current.value=" "


    
 

    /* other product data */





// addpost(userId,title,body,tags,reactions)




}
 return<>
     <h4 style={{marginTop:"-8%"}}> Welcome to our APP !! Create Post with Happy</h4>
     <form className="createpost" onSubmit={Newpost}>
     <div class="mb-3">
    <label for="Id" class="form-label">Id</label>
    <input type="text" class="form-control" id="Id" placeholder="Enter your Id" ref={IdElement}/>
     </div>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" placeholder="Enter Your Title" ref={TitleElement}/>
    <div id="emailHelp" class="form-text">We'll never share your data with anyone els.</div>
  </div>
  <div class="mb-3">
    <label for="body" class="form-label">Description</label>
    <textarea type="text" class="form-control" id="body"  placeholder="somthisg write"  ref={textElement}/>
  </div>

  <div class="mb-3">
    <label for="tag" class="form-label">Tags</label>
    <input type="text" class="form-control" id="tag" placeholder="Enter the tags" ref={tagElement}/>
     </div>
     <div class="mb-3">
    <label for="reactions" class="form-label">Reactions</label>
    <input type="text" class="form-control" id="reactions" placeholder="peoples are reacted you" ref={reactionElement}/>
     </div>
    
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Post</button>
</form>
    </>
}
export default CreatePost