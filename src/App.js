import React from 'react';

function App() {

  return(
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am changed")}}></input>
    </React.Fragment>
  )}

export default App;
