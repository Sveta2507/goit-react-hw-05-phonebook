import React, { Component } from "react";
import classes from "./Notifications.module.css";
// import PropTypes from "prop-types";
// import { CSSTransition } from "react-transition-group";

// const Notifications = ({ name, isExists }) => {
//   return (
//     <CSSTransition
//       timeout={250}
//       appear={true}
//       in={isExists}
//       classNames={classes}
//       unmountOnExit
//     >
//       <p className={classes.notif}>{name} is already existing</p>;
//     </CSSTransition>
//   );
// };

// Notifications.propTypes = {
//   message: PropTypes.string,
// };

// Notifications.defaultProps = {
//   message:
//     "Warning! You are trying to add contact, which has already been added!",
// };

// export default Notifications;

let id;
class Alert extends Component {
  disableAlert = () => {
    this.props.change(false);
  };

  componentWillMount() {
    clearTimeout(id);
  }

  render() {
    id = setTimeout(() => {
      this.disableAlert();
    }, 1700);

    return (
      <h4>
        Warning! You are trying to add contact, which has already been added!
      </h4>
    );
  }
}

export default Alert;
