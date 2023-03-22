
import './styles/OptionsButtonsContainer.css';
import './OptionButton'
import OptionButton from "./OptionButton";


function OptionsButtonsContainer({newPost, myPosts}) {



  return (
    <div className="mainContainer">
      <OptionButton label={'+New Post'} color={'green'} onClick={newPost}/>
      <OptionButton label={'My Posts'} color={'#306fdb'} onClick={myPosts}/>
    </div>
  );
}

export default OptionsButtonsContainer;
