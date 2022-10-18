import React from 'react';
import './App.css';
import { people } from './data/data';
import RegularList from './RegularList';
import { SmallPersonListItem } from './people/SmallPersonListItem';

function App() {
  return (
    <RegularList
      items={people}
      resourceName={'person'}
      itemComponent={SmallPersonListItem}
    />
  );
}

export default App;
