import React from "react";
import "./App.css";
import { UserLoader } from "./DataLoaders/UserLoader";
import { User } from "./people/User";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <UserLoader userId={2}>
        <User />
      </UserLoader>
    </>
  );
}

export default App;
