import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import { UlFriendStyled, LiFriendStyled } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <>
      <UlFriendStyled className="friend-list">
        {friends.map((friend) => (
          <LiFriendStyled key={friend.id} className="item">
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </LiFriendStyled>
        ))}
      </UlFriendStyled>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;