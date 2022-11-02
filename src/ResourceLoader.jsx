import React, { useEffect, useState } from "react";
import axios from "axios";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [data, setUser] = useState(null);
  console.log(resourceUrl);
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setUser(response.data);
    })();
  }, [resourceUrl]);

  console.log(data);

  return (
    <>
      {data ? (
        React.Children.map(children, (child) => {
          return React.isValidElement(child)
            ? // [resourceName] => to jest nazwa propsa przekazana w komponencie App.js
              React.cloneElement(child, { [resourceName]: data })
            : child;
        })
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
};
