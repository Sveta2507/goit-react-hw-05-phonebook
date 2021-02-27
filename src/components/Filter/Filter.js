import React from "react";

const Filter = ({ onChange, value }) => {
  return (
    <>
      <label>Filter</label>
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="filter contacts"
      />
    </>
  );
};

export default Filter;
