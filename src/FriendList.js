import Friend from "./Friends";

export default function FriendList({
  initialFriends,
  onSelectFriend,
  selectedFriend,
}) {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((el) => (
        <Friend
          friend={el}
          key={el.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
