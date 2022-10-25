import React, { useEffect, useState } from "react";
import axios from "axios";

export const ResourceLoader = ({children, url, resourceName}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async() => {
      const response = await axios.get(`${url}`);
      setState(response.data);
  })();
  },[url])
  console.log(`${resourceName}`, state);

  return (
    <>
      {React.Children.map(children, child => {
        if(React.isValidElement(child)){
         return React.cloneElement(child, {[resourceName]: state})
        }
      })}
    </>
  )
}