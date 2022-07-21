import './CommentSection.css';
import { BsFillPersonFill } from "react-icons/bs";

const CommentSection = () => {   
   return (  
      <div className="commentsection">
         <div className="sendArea">
            <BsFillPersonFill className='commentIconStyle'/>

            <div className="commentInputBox">
               <p>SEND YOUR FRIENDLY COMMENT</p>
            </div>

            <button className="sendComment">SEND</button>
         </div>
      </div>
   );
}
 
export default CommentSection;