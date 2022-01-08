import PropTypes from "prop-types";
import {
  IsOnlineStyled,
  IsOfflineStyled,
  ImgStyled,
  PStyled,
} from "./FriendList.styled";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <IsOnlineStyled className="status"></IsOnlineStyled>
      ) : (
        <IsOfflineStyled className="status"></IsOfflineStyled>
      )}
      <ImgStyled className="avatar" src={avatar} alt="User avatar" width="48" />
      <PStyled className="name">{name}</PStyled>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;