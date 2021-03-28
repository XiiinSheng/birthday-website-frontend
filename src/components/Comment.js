/* Individual Comment */

const Comment = ({comment}) => {
    return (
        <div className="oneComment">
            <b className="commentName">{comment.name}:&nbsp;&nbsp;</b>
            <div className="commentContent">{comment.content}</div>
        </div>
    )
}

export default Comment
