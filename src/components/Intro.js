/* Intro (second) Page of Website */

import AddPost from './AddPost'
import Button from './Button'
import { useState } from "react"

import photo from '../images/photo.jpg'

const B1SHOW = "Click Here to Post a Wish! "
const B1HIDE = "Cancel"

const Intro = ({onAdd}) => {

    const [showAddPost, setShowAddPost] = useState(false);
    const [b1Text, setB1Text] = useState(B1SHOW);

    return (
        <div id="intro">
            <div className="row" id="introPage">
                
                {/* photo */}
                <div className="col-md-5" id="photoDiv">
                <img id="photo" src={photo} alt="Not found"/>
                </div>

                {/* texts */}
                <div className="col-md-6"
                    id="introText">
                    <h1 id="introTitle">Have a wonderful birthday now and forever</h1>
                    <p id="introPara">XXXX, happy n-th birthday!<br/>
                        2021 will be a marvelous year. <br/>
                        Us friends are separated around the globe, <br/>
                        thus this platform is created<br/>
                        for us to wish you happy birthday together. <br/>
                    </p>

                {/* Button for adding new posts */}
                <Button id="addPostButton"
                    myClass="btn btn-warning btn-lg text-white"
                    onToggle={async()=>{
                    setB1Text(b1Text === B1SHOW ? B1HIDE : B1SHOW)
                    await setShowAddPost(!showAddPost)
                    window.location.href='#addPostForm'
                }}
                    value={b1Text}
                />
                </div>

            </div>

            {/* Form for adding new posts */}
            {   showAddPost &&
                <div id="addPostForm">
                    <AddPost onAdd={onAdd}
                        toggle={()=>{setShowAddPost(!showAddPost)
                            setB1Text(b1Text === B1SHOW ? B1HIDE : B1SHOW )}}
                    />
                </div>
            }
        </div>
    )
}

export default Intro
