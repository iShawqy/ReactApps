import './styles/newPostView.css';
import { useState } from 'react';
import axios from "axios";

function NewPostView({dbURL, username, onClickSeePosts}){
    const [postContent, setPostContent] = useState('');
    const [postBtnText, setpostBtnText] = useState('Post');

    function handleKeyup(event){
        if(event.key === 'Enter'){
    post();
  }
    }

    function post(){
        if (postContent !== ''){
            setpostBtnText('Posting...')
            let data  = {
            postContent: postContent,
            username: username
        }
        axios({
        method: 'post',
        url:dbURL + '/posts' ,
        data: data
      })
      .then(response => {
        setPostContent('')
          setpostBtnText('Post')

      })

      .catch(error => {
        alert("Error Posting! try again.")
          setpostBtnText('Post')
      })
        }


    }
    return (
        <div className="NewPostMainContainer">
            <div className="postLabel">
                New post:
            </div>

        <textarea onKeyUp={handleKeyup}
            className="postContent"
            placeholder="Type your post here..."
          name="postContent"
          rows={4}
          cols={40}
            value={postContent} // ...force the input's value to match the state variable...
      onChange={e => setPostContent(e.target.value)}
        />
            <div className="newPostsBtnsContainer">
                 <div className="postBtn" onClick={post}>
                {postBtnText}

        </div>

            <div className="seePostsBtn" onClick={onClickSeePosts}>
                See my Posts

        </div>
            </div>


    </div>


    );


}


export default NewPostView;