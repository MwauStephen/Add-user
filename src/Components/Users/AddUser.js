import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  return (
    <Card className={styles.input}>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age(Years):</label>
        <input type="number" id="age" />
      </form>
    </Card>
  );
};

export default AddUser;
