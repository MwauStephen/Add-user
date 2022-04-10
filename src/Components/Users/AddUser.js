import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // 7.managing state for the error modal
  const [errorModal, setErrorModal] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log("You submitted");

    //1.Check for the validity of the form(username and age)
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      // 7.modal display message on empty inputs
      setErrorModal({
        modalTitle: "Invalid input",
        modalMessage: "Please enter a valid name and age (non-empty values) ",
      });
      return;
    }

    // 2.Check for age to be  > 1
    if (+enteredAge < 1) {
      // 8.modal display message on age < 0
      setErrorModal({
        modalTitle: "Invalid age input",
        modalMessage: "Please enter a valid age (age >0) ",
      });
      return;
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

  const errorHandler = () => {
    setErrorModal(null);
  };

  return (
    <div>
      {errorModal && (
        <ErrorModal
          modalTitle={errorModal.modalTitle}
          modalMessage={errorModal.modalMessage}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
