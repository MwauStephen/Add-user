import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
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
      <Button>Add user</Button>
    </Card>
  );
};

export default AddUser;
