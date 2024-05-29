import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState();

  const handleInput = (event) => setText(event.target.value)

  return (
    <>

    <img data-testid="giphy" src="https://i.pinimg.com/originals/fe/58/bc/fe58bc71e2f268cee0743a63f5416747.gif" alt="hera" />
      <div>
        <input type="text" onChange={handleInput} placeholder='Type your name'/>
        <h1>Hello {text}</h1>
      </div>
    </>
  )
}

export default App
