import React from 'react';
import './App.css';
import UserCard from "./User/UserCard";
import withUserFromApi from "./User/withUserFromApi";
import UserCard2, {yolo} from "./User/UserCard2";

const User = withUserFromApi(UserCard);
const User2 = withUserFromApi(UserCard2);

const App = () => {
  return (
    <div className="App">
      <User yolo={"swag"} />
      <User2 />
    </div>
  );
}

export default App;
