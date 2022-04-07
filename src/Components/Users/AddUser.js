import React from "react";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  return (
    <div>
      <form className={styles.input}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age(Years):</label>
        <input type="number" id="age" />
      </form>
    </div>
  );
};

export default AddUser;
