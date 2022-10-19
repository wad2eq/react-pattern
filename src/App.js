import React from "react";
import "./App.css";
import { DataContainer } from "./DataContainer";
import { User } from "./people/User";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <DataContainer>
        <User />
      </DataContainer>
    </>
  );
}

export default App;
