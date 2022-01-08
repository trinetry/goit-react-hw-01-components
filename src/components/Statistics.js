import PropTypes from "prop-types";
import {
  SectionStyled,
  H2Styled,
  UlStyled,
  LiStyled,
  LiHeaderStyled,
  LiNumbersStyled,
} from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <SectionStyled className="statistics">
      {title && <H2Styled className="title">{title}</H2Styled>}
      <UlStyled className="stat-list">
        {stats.map((stat) => (
          <LiStyled key={stat.id} className="item">
            <LiHeaderStyled className="label">{stat.label}</LiHeaderStyled>
            <LiNumbersStyled className="percentage">
              {" "}
              {stat.percentage}%
            </LiNumbersStyled>
          </LiStyled>
        ))}
      </UlStyled>
    </SectionStyled>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;