import React from 'react';
import InsideList from './components/InsideList';
import InsideListItem from './components/InsideListItem';
import PropList from './components/PropsList';

function App() {
  return (
    <div className="App">
      <p>hello ubuntu</p>
      <InsideList />
      <InsideListItem />
      <PropList />
    </div>
  );
}

export default App;
