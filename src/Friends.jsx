import "./Friends.css";

export const Friends = ({ friends }) => {
  return (
    <section className="friends">
      <h2 className="title">Friends List</h2>
      <ul className="friends-list">
        {friends.map((friend) => (
          <li className="friend" key={friend.id}>
            <span
              className={`status ${friend.isOnline ? "online" : "offline"}`}
              title={friend.isOnline ? "Online" : "Offline"}
            ></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt={`${friend.name}'s avatar`}
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
