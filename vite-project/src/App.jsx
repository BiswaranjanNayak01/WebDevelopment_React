import Chai from "./Chai.jsx"


// ---- we can use only one tag inside return()(usually we pass <></> or <div> <div/>)
// but that one tag can have more tags.


// function App() {
//   return (
//     <h1>Hitesh aur React</h1/
//     <Chai/>
//   );
// }

//------Component tag must be start with capital letter (EX: <Chai/> ).

function App() {
  return (
    <>
    <h1>Hitesh aur React</h1>
    <Chai/>
    </>
  );
}

export default App