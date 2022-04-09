import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addNameHandler = (event) => {
    console.log(event.target.value);
  };
  const addAgeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addFormHandler}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" onChange={addNameHandler} />
        <label htmlFor="age">Age(Years):</label>
        <input type="number" id="age" onChange={addAgeHandler} />
      </form>
      <Button>Add user</Button>
    </Card>
  );
};

export default AddUser;
