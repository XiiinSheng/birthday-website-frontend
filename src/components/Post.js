/* Individual Post */

import Comments from './Comments'

const Post = ({post, comments, getComments, onAddComment}) => {
    return (
        <div className="col post">
            <div className="postBody">
                <div className="content">"{post.content}"</div>
                <div className="name">&mdash; <b>{post.name}</b></div>
                <div className="date">{post.date}</div>
            </div>
            <Comments comments={comments} postID={post._id}
                onAddComment={onAddComment}
                />
        </div>
    )
}

export default Post
