import React from "react";
import classes from "./Filter.module.css";
import { CSSTransition } from "react-transition-group";

const Filter = ({ onChange, value }) => {
  return (
    <CSSTransition>
      <>
        <label className={classes.label}>Filter:</label>
        <input
          type="text"
          onChange={onChange}
          value={value}
          placeholder="Filter contacts if necessary"
        />
      </>
    </CSSTransition>
  );
};

export default Filter;
