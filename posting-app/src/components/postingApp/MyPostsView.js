import './styles/myPostsView.css';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import PostCard from "./PostCard";


function MyPostsView({dbURL, username, onClickNewPost}){
    const [postsData, setPostsData] = useState([]);

    // const [lastPostId, setLastPostId] = useState(0)
    let lastPostId = 0
    //
    // function getLastPostID(){
    //     setLastPostId(postsData[postsData.length-1].id)
    //     // for (let i=0; i<postsData.length;i++){
    //     //     setLastPostId(postsData[i].id)
    //     // }
    //
    // }
    function scrollToLastPost(){
        document.getElementById(lastPostId).scrollIntoView();
    }
    function getPosts(){
         axios.get(dbURL+'/posts')
      .then(response => {
          const newPostsData = []
          let updateFlag = false

          for (let i=0; i<response.data.length; i++){
              if (response.data[i].id > lastPostId){
                  newPostsData.push(response.data[i])
                  updateFlag = true
              }
          }
          if (updateFlag){
              setPostsData((postsData) => [...postsData, ...newPostsData])
          }

          if (newPostsData.length>0){
              lastPostId = newPostsData[(newPostsData.length)-1].id
          }
          // console.log(lastPostId)

        // setPostsData(newPostsData);
        // console.log(postsData)
        // setLastPostId(postsData[postsData.length].id)
          if (updateFlag){
              setTimeout(scrollToLastPost, 100)
          }


      })
      .catch( error => {
        alert("Error getting posts")
      })
    }
    useEffect(() => {
        const id = setInterval(() => {
      getPosts();
    }, 300);
     // getPosts();
return () => {

      clearInterval(id);
    };
  }, []);
    return (
        <div>
            <div className="postsContainer">
                {postsData.map(postData => (
                    <div key={postData.id} id={postData.id}>
                        <PostCard postContent={postData.postContent}/>
                        </div>
                ))}

            </div>


        </div>
    )




}

export default MyPostsView;