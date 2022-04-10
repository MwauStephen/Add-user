import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = () => {
  return (
    <div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid input</h2>
        </header>
        <div className={styles.content}>
          <p>Please enter a valid input</p>
        </div>
        <footer className={styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
