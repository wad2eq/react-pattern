import React, { useState, useEffect } from "react";
import axios from "axios";

export const DataContainer = ({ children }) => {
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      const data = response.data;
      setDataUser(data);
    })();
  },[]);

  console.log(dataUser);
 
  return (
    <>
      {React.Children.map(children, child => {
        if(React.isValidElement(child)){
          return React.cloneElement(child, {dataUser})
        }
      })}
    </>
    );
};
