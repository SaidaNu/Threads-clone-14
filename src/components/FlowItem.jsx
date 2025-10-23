import { AiFillPlusCircle } from "react-icons/ai";

export default function FlowItem({
  profile,
  name,
  isFollowed,
  text,
  image,
  toFollow,
}) {
  function toggleFollow() {
    toFollow(name);
  }

  return (
    <div className="flowItem">
      <div className="profile__flowItem">
        <img src={profile} className="avatar__flowItem" fill="black" />
        {!isFollowed ? (
          <AiFillPlusCircle
            className="bi bi-plus-circle-fill"
            size={25}
            onClick={toggleFollow}
          />
        ) : (
          <AiFillPlusCircle className="hidden" size={25} />
        )}
      </div>

      <div className="info__flowItem">
        <div class="author_cont">
          <h1 className="author__flowItem">{name}</h1>
          {isFollowed && (
            <button onClick={toggleFollow} className="unfollow_btn_flowItem">
              Unfollow
            </button>
          )}
        </div>
        <p className="text__flowItem">{text}</p>
        <div className="image__cont">
          <img src={image} alt="Картинка" className="img__flowItem" />
        </div>
      </div>
    </div>
  );
}
