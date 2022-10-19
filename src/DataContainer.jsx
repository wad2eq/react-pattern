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
  console.log(React.Children.count(children));

  return <div> data container</div>;
};
