import './styles/ProfilePicture.css'
function ProfilePicture({ userID }) {
  let imageSrc = process.env.PUBLIC_URL +"/usersPhotos/" + userID+".png";
  return (
    <img className="ProfilePicture"
    src={imageSrc} alt={userID}
    >

    </img>
  );
}

export default ProfilePicture;