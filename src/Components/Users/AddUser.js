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

    // 2.Check for age to be  > 1
    if (+enteredAge < 1) {
      console.log(enteredAge);
    }

    // 3.Clear the form inputs on submit
    setEnteredName("");
    setEnteredAge("");

    // 6.Lifiting state up
    props.onAddUser(enteredName, enteredAge);
    // console.log(enteredName, enteredAge);
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
        <input
          type="text"
          id="username"
          onChange={addNameHandler}
          value={enteredName}
        />
        <label htmlFor="age">Age(Years):</label>
        <input
          type="number"
          id="age"
          onChange={addAgeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
