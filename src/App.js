import React from 'react';

// function App() {

//   return(
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I am changed")}}></input>
//     </React.Fragment>
//   )}

const App = () => {
  return (
  <div>
    <Cat/>
  </div>
  )
}
const Cat = () => {
  return <div>Meow</div>;
};
export default App;
