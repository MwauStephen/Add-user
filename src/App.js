import React, { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  // 5.add user inputs to an array using state
  const [userList, setUserList] = useState([]);

  // 6.Lifting state up in parent
  const addUserLiftHandler = (upliftedUserName, upliftedUserAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: upliftedUserName, age: upliftedUserAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserLiftHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
