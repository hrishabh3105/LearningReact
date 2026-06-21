import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(0) // Used to propagate changes to UI .. its parameter could be anything
              // Use state returns and array with two elements first one is a variable and second one is a function
              // in this case we are using counter variable, so react will execute the functoin and change the value
              // of counter variable everywhere in the code. Initial value of the counter variable is 5 in this case
              // since we have written useState(5)
 const addValue = () => {
  setCounter(counter+1) // to update the value of counter we are using setCounter method and updating counter inside it 
 }
 const removeValue = () => {
  setCounter(counter -1)
 }
  return (
    <>
    <h1>Counter App</h1>
    <h2>counter Value: {counter} </h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
