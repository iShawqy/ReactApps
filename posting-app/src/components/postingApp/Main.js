// import Gallery from "../galleryApp/Gallery";
import './styles/Main.css'
import ProfilePicture from "./ProfilePicture";
import OptionsButtonsContainer from "./OptionsButtonsContainer";
import {useState} from "react";
import NewPostView from "./NewPostView";
import MyPostsView from "./MyPostsView";


function Main() {
   let dbURL = "http://localhost:3004";
  let username = "Ibra";
  let [view, setView] = useState('home')

  function newPost(){
    setView('newPost');
    }

    function myPosts(){
        setView('myPosts')
    }



    if (view === 'home'){
      return (
    <div className="Main">
    <ProfilePicture userID={username}/>
    <div className="username">
      {username}
    </div>
      <OptionsButtonsContainer newPost={newPost} myPosts={myPosts}/>
    </div>
  );
    } else if (view === "newPost") {
      return (

    <div className="Main">
    <ProfilePicture userID={username}/>
    <div className="username">
      {username}
    </div>
      <NewPostView dbURL={dbURL} username={username} onClickSeePosts={myPosts}/>
    </div>

  );
    }
    else if (view === "myPosts") {
      return (
    <div className="Main">
    <ProfilePicture userID={username}/>
    <div className="username">
      {username}
    </div>
      <MyPostsView username={username} dbURL={dbURL} onClickNewPost={newPost}/>

    </div>
  );
    }

}

export default Main;