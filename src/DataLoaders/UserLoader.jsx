import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserLoader = ({userId,  children }) => {
  console.log(userId);
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => console.log("load user "),[])

  useEffect(() => {
    (async () => {
      console.log('load data');
      try{
        const response = await axios.get(`/users/${userId}`);
        const data = response.data;
        setDataUser(data);
      }catch(error){
        console.log("error", error);
      }
    })();
  },[userId]);
  console.log(dataUser);
  return (
    <>
      {React.Children.map(children, child=> {
        return React.isValidElement(child)? React.cloneElement(child, {dataUser}) : child;
      })}
    </>
  );
};
