import PropTypes from "prop-types";
import { H1Styled } from "./Section.styled";

function Section({ title, children }) {
  return (
    <div className="allTasks">
      {title && <H1Styled className="title">{title}</H1Styled>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;