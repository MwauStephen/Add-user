import React, { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  // 5.adde user inputs to an array using state
  const [userList, setUserList] = useState([]);
  return (
    <div>
      <AddUser />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
