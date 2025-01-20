import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

export default function FlowItem({ profile, author, text, image }) {

  const [isFollowed, setIsFollowed]=useState(false);

  function toFollow() {
    setIsFollowed(!isFollowed);
  }

  return (
    <div className="flowItem">
      <div className="profile__flowItem">
        <img src={profile} className="avatar__flowItem" fill="black" />
        {!isFollowed ? <AiFillPlusCircle className= "bi bi-plus-circle-fill" size={25} onClick={toFollow} /> : <AiFillPlusCircle className= "hidden" size={25}/>}
      </div>

      <div className="info__flowItem">
        <h1 className="author__flowItem">{author}</h1>
        <p className="text__flowItem">{text}</p>
        <div className="image__cont">
          <img src={image} alt="Картинка" className="img__flowItem" />
        </div>
      </div>
    </div>
  );
}
