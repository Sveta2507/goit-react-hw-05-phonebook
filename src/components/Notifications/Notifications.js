import React from "react";
import classes from "./Notifications.module.css";
import PropTypes from "prop-types";

const Notifications = ({ message }) => {
  return <p className={classes.notif}>{message}</p>;
};

Notifications.propTypes = {
  message: PropTypes.string,
};

Notifications.defaultProps = {
  message:
    "Warning! You are trying to add contact, which has already been added!",
};

export default Notifications;
