/* The Form to Add a Post to the List */

import {useState} from "react"

const AddPost = ({onAdd, toggle}) => {

    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    const onSubmit = (e) => {
        const date = Date();

        e.preventDefault();

        if(!name || !content){
            alert("Please fill in name and content");
            return;
        }

        onAdd({name, content, date});
        setName('');
        setContent('');
        
    }

    return (
        <div id="addPostForm">
            <hr id="postFormRuler" />
            <h1 id="postFormTitle">Leave Your Wishes for XXXX!</h1>
            <p className="text-primary">Everybody will see your post, and you cannot edit it once you submit. <br/>
                You can also comment to other people's posts. Drag down to see more. <br/>
                Posts will be added with quotation mark automatically. </p>
            <form id="postForm" action="POST" onSubmit={onSubmit}>
                <div >
                    <input className="form-control postInput"
                        type="text"
                        placeholder="Your Name (real/anonymous/nickname）" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>
                <div>
                    <textarea className="form-control postInput"
                        type="text" 
                        placeholder="What to say to XXXX?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <input className="btn btn-primary btn-lg" 
                    type="submit" value="Post" onClick={()=>{setTimeout(()=>(toggle()),10)}}/>
                <input className="btn btn-secondary btn-lg" 
                    type="button" value="Cancel" onClick={toggle}/>

            </form>
        </div>
    )
}

export default AddPost
