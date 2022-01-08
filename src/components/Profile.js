import PropTypes from "prop-types";
import {
  DivStyled,
  ImgStyled,
  NameStyled,
  InfoStyled,
  UlStyled,
  LiStyled,
  LiHeaderStyled,
  LiNumbersStyled,
} from "./Profile.styled";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <DivStyled className="profile">
      <div className="description">
        <ImgStyled src={avatar} alt="User avatar" className="avatar" />
        <NameStyled className="name">{username}</NameStyled>
        <InfoStyled className="tag">@{tag}</InfoStyled>
        <InfoStyled className="location">{location}</InfoStyled>
      </div>

      <UlStyled className="stats">
        <LiStyled>
          <LiHeaderStyled className="label">Followers </LiHeaderStyled>
          <LiNumbersStyled className="quantity">
            {stats.followers}
          </LiNumbersStyled>
        </LiStyled>
        <LiStyled>
          <LiHeaderStyled className="label">Views </LiHeaderStyled>
          <LiNumbersStyled className="quantity">{stats.views}</LiNumbersStyled>
        </LiStyled>
        <LiStyled>
          <LiHeaderStyled className="label">Likes </LiHeaderStyled>
          <LiNumbersStyled className="quantity">{stats.likes}</LiNumbersStyled>
        </LiStyled>
      </UlStyled>
    </DivStyled>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;