import FlowItem from "./FlowItem";

export default function Flow({ authorIsFollowed, toFollow }) {
  return (
    <div className="flow cont">
      {authorIsFollowed.map((post) => (
        <FlowItem
          profile={post.profilePicture}
          name={post.author.name}
          isFollowed={post.author.isFollowed}
          text={post.text}
          image={post.imageUrl}
          toFollow={toFollow}
        />
      ))}
    </div>
  );
}
