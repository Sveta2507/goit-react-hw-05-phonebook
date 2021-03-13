import React from "react";
// import classes from "./Notifications.module.css";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import classes from "./Title.module.css";

const Title = ({ title }) => {
  return (
    <CSSTransition
      appear={true}
      classNames={classes}
      timeout={500}
      unmountOnExit
    >
      <h1>{title}</h1>
    </CSSTransition>
  );
};

export default Title;
