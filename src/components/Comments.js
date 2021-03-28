/* List of Comments under One Post */

import { useState } from "react"
import Comment from './Comment'
import Button from './Button'
import AddComment from './AddComment'

const B1SHOW = "Show Comments";
const B1HIDE = "Hide Comments";

const B2SHOW = "New Comment";
const B2HIDE = "Cancel";

const Comments = ({comments, postID, onAddComment}) => {

    /***************** VARIABLES *******************/

    // whether to show comments
    const [showComments, setShowComments] = useState(false);
    const [showAddComment, setShowAddComment] = useState(false);
    const [b1Text, setB1Text] = useState(B1SHOW);
    const [b2Text, setB2Text] = useState(B2SHOW);


    /***************** FUNCTIONS *******************/


    return (
        <div  className="commentSection">

            {/* Comment bar, has two buttons */}
            <div className="commentBar" style={{backgroundColor: barColor()}}>
            {/* Button for showing comments */}
            <Button myClass="btn btn-link text-secondary showCommentsButton"
                value={b1Text} onToggle={()=>{
                setB1Text(b1Text === B1SHOW ? B1HIDE : B1SHOW);
                setShowComments(!showComments);
                setShowAddComment(showComments ? showAddComment : false);
                setB2Text((b2Text === B2SHOW) && (showComments) ? B2HIDE : B2SHOW);
                }} 
                />
            {/* addComment button: don't show when showComments==false */}
            { showComments && 
                /* Button for adding comments */
                 <Button myClass="btn btn-link text-secondary newCommentButton" 
                    value={b2Text} onToggle={()=>{
                    setB2Text(b2Text === B2SHOW ? B2HIDE : B2SHOW);
                    setShowAddComment(!showAddComment);
                    }} 
                />
            }
            </div>
            

            {
                /* Form for adding comments */
                showAddComment && showComments &&
                    <AddComment onAddComment={onAddComment} 
                        toggle={()=>{setShowAddComment(!showAddComment)
                            setB2Text(b2Text === B2SHOW ? B2HIDE : B2SHOW )}}
                        postID={postID} />
                
            }

                {/* Existing comments: don't show wehn showComments == 0 */}
            {  showComments &&
                <div className="commentList">
                    {( comments.length !== 0 ? 
                    comments.map((comment, index) => (
                        <div key={comment._id} className="commentsSection">
                        <Comment comment={comment} />
                        {index === comments.length-1 ? '' : <hr/>}
                        </div>
                    ))
                    : 
                    <p className="commentsSection">No comments yet. </p>
                    )}
                </div>
            }
 
        </div>
    )
}


const barColor = ()=> {
    const colors = ["#E2D7F3", "#D7EFF3", "#D7F3E1", "#F2F3D7", "#F3D7D7", "#F3D7ED"]
    const index = Math.floor(Math.random()*(colors.length+1));
    return colors[index];
};


export default Comments
