import React from "react";
import Button from "./Button";

const ErrorModal = () => {
  return (
    <div>
      <header>
        <h2>Invalid input</h2>
      </header>
      <div>
        <p>Please enter a valid input</p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </div>
  );
};

export default ErrorModal;
