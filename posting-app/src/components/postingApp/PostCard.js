import './styles/postCard.css';

function PostCard({postContent}){

    return (
        <div>
            <div className="postCardContainer">
                {postContent}
            </div>
        </div>
    )

}

export default PostCard;