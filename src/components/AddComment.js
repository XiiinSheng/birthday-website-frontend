/* The form to add one comment under a post */

import {useState} from "react"

const AddComment = ({onAddComment, postID, toggle}) => {

    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const date = Date();

    const onSubmit = (e) => {
        e.preventDefault();
        if(!name || !content){
            alert("Please fill in name and content");
            return;
        }

        onAddComment({name, content, postID, date});
        setName('');
        setContent('');
        
    }

    return (
        <div className="addComment">
            <h4>New Comment</h4>
            <form action="POST" onSubmit={onSubmit}>
                <div>
                    <input className="form-control commentInput" 
                        type="text"
                        placeholder="Your Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <textarea className="form-control commentInput" 
                        type="text" 
                        placeholder="Any comments?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <input className="btn btn-primary" type="submit" 
                    value="Comment" 
                    onClick={()=>{setTimeout(()=>(toggle()),10)}}
                />
            </form>
        </div>
    )
}

export default AddComment
