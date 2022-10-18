import React from 'react';

const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items ? (
        items.map((item, i) => (
          <ItemComponent key={i} {...{ [resourceName]: item }} />
          /**
           * ...{ [resourceName]: item } ===
           */
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
export default RegularList;
