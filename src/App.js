/*
 * Project Name: Jasmine2021 Frontend
 * Description: Birthday wishes website for Jasmine 2021/03/29. 
 * Backend API deployed at https://birthday-website-backend.herokuapp.com/
 * Test: http://localhost:9000/posts
 * const LOCATION = "http://localhost:3000/"   // for local dev
 * const LOCATION = "https://birthday-website-backend.herokuapp.com/"    // for heroku
 * Author: Xin Sheng
 * Date: 2021/03/25 - 2021/03/29
*/

// Change from local to heroku: change URL in App.js

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Cover from './components/Cover'
import Intro from './components/Intro'
import Posts from './components/Posts'
import About from './components/About'
import Footer from './components/Footer'

import mainJS from './main.js'

// const URL = "http://localhost:9000/posts"   // for development
const URL = "https://birthday-website-backend.herokuapp.com/posts"  //for deploy
const ALL = "/all"
const COMMENT = "/comment"
const NEW = "/new"

function App() {

  /********** VARIABLES & STATES **********/

  // all posts
  const [posts, setPosts] = useState([]);
  // all comments
  const [comments, setComments] = useState([]);



  /************** FUNCTIONS **************/

  //side effect
  useEffect(() => {
    const fetchData = async () => {
      const postsFromServer = await getPosts();
      setPosts(postsFromServer);
      const commentsFromServer = await getComments();
      setComments(commentsFromServer);
    }
    const script = document.createElement('script', {type: "text/javascript", src: mainJS});
  // script.type="text/javascript"
  // script.src = mainJS;
    script.async = true;
    document.body.appendChild(script);

    fetchData();
  }, [])

  // GET all posts
  const getPosts = async () => {
      const res = await fetch(`${URL}${ALL}`);
      const data = await res.json();

      return data;
  }


  // GET all comments
  const getComments = async () => {
      const res = await fetch(`${URL}${COMMENT}${ALL}`);
      const data = await res.json();

      return data;
  }

  // POST (add) one post
  const addPost = async (post) => {
      //send POST to backend
      const res = await fetch(`${URL}${NEW}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      })

      const data = await res.json();
      await console.log(data.date)

      setPosts([...posts, data])

  }

  //POST one comment
  const addComment = async ({name, content, postID, date}) => {
//TODO
    //send POST to backend
    const res = await fetch(`${URL}/${postID}${COMMENT}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, content, date})
    })

    const data = await res.json();

    setComments([...comments, data])
  }

  /****** MAIN STRUCTURE & COMPONENTS ******/
  return (
    <Router id="router">
      <div id="background"/>
      <div id="mainDiv">
      <Cover />

      {/* Main Page */}
      <Route id="routeRoot" path='/' exact render={(props) => (
        <>
          <Intro onAdd={addPost} />
          <Posts posts={posts} comments={comments}
            onAddComment={addComment}
          />
        </>
      )} />

      {/* About Page */}
      <Route id="routeAbout" path='/about' component={About} />

      <Footer />
      </div>
    </Router>
  );
}


export default App;
