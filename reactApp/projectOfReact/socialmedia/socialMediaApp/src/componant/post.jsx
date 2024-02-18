import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from  "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PostListItem } from "../store/postListContaxt";

function Post({title})
{
  const{deletepst}=useContext(PostListItem)
    return<>
     <div class="card" style={{width: "30rem"}}>
    <div className="delet" onClick={()=>deletepst(title.title)}><FontAwesomeIcon icon={faTrash}/></div>  
  <div class="card-body post">
    <h5 class="title">{title.title}</h5>
   <p class="card-text text_para">{title.body}</p>

    {title.tags.map((tag)=><span class="badge bg-secondary tag">{tag}</span>)}

    
 <p className="reactions"><span class="badge text-bg-success">this post is reacted by {title.reactions}</span></p>
     
  </div>
</div>

    </>
}
export default Post
