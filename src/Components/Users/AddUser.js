import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log("You submitted");

    //1.Check for the validity of the form(username and age)
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    // Check for age to be  > 1
    if (enteredAge < 1) {
      return;
    }

    console.log(enteredName, enteredAge);
  };

  const addNameHandler = (event) => {
    // console.log(event.target.value);
    setEnteredName(event.target.value);
  };
  const addAgeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" onChange={addNameHandler} />
        <label htmlFor="age">Age(Years):</label>
        <input type="number" id="age" onChange={addAgeHandler} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
