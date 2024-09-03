import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// const [counter,setCounter]=useState(15)---will show error
// let counter=15
//here we used useState and created parameter counter,it will update countervalue everywhere in UI after operation, so that we don't need to use more line of javascript code like you donne in Rose_game.
let [counter,setCounter]=useState(15)

const addValue=()=>{
  console.log("value added",Math.random());

  counter=counter+1
  setCounter(counter);
  console.log("counter added "+counter);
}
function removeValue(){
  
  setCounter(counter-1);
  console.log("counter removed "+counter);
}

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
