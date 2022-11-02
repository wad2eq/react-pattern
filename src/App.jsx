import React from "react";
import "./App.css";
import { User } from "./people/User";
import { ResourceLoader } from "./ResourceLoader";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <ResourceLoader resourceUrl="/users/1" resourceName="dataUser">
        <User />
      </ResourceLoader>
    </>
  );
}

export default App;
