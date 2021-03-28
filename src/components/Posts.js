/* List of Posts */

// import { useState } from "react"
import Post from './Post'


const Posts = ({posts, comments, onAddComment}) => {
    /**************** VARIABLES *************/

    /*************** FUNCTIONS ***************/
    const commentsOfThisPost = (postID) => {
        const data = comments.filter((comment) => (
            comment.parentPost === postID
        ))
        console.log(data);
        //setCommentList(data);   
        return data     
    }

    return (
        <div id="posts">

            {   posts.length !== 0 ? 
                posts.slice(0).reverse().map((post) => {
                    var data = comments.filter((comment) => (
                        comment.parentPost === post._id
                    ))
                    return <Post key={post._id} post={post} comments={data}
                                getComments={()=> {commentsOfThisPost(post._id)}}
                                onAddComment={onAddComment}
                            />
                }) : 
                <p>No posts to show. Please wait a while or try again. </p>
            }
        </div>
    )
}

export default Posts
