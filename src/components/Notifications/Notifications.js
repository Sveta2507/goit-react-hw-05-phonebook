import React from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./Notifications.module.css";

const Notifications = ({ contactAdded }) => {
  return (
    <CSSTransition
      in={contactAdded}
      timeout={250}
      classNames={classes}
      unmountOnExit
    >
      <div className={classes.container}>
        <p className={classes.text}>
          Warning! You are trying to add contact, which has already been added!
        </p>
      </div>
    </CSSTransition>
  );
};
export default Notifications;
