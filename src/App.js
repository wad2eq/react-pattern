import React from "react";
import "./App.css";
import { DataContainer } from "./DataContainer";
import { User } from "./people/User";
import { Product } from "./products/Product";
import { ResourceLoader } from "./ResoureceLoader";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <ResourceLoader url="/users/1" resourceName='dataUser'>
        <User />
      </ResourceLoader>
      <ResourceLoader url="/products/1" resourceName='product'>
        <Product />
      </ResourceLoader>
    </>
  );
}

export default App;
