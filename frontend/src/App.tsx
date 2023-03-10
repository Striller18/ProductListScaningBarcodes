import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav  from "./components/Nav";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [actualPage, setActualPage]= useState("home")
  const [lastPage, setLastPage]= useState("")

  return (
    <div className="App">
      <h1 className='font-bold'>Vite + React + Typescript + Tailwind CSS 3</h1>
      <div className="card">
        {actualPage==="home" ? 
        <button onClick={() => {
          setLastPage(actualPage); 
          setActualPage("prueba")}
        }>go prueba</button>
         :
          <h1>reload :)</h1>
        }
      </div>
      <Nav actualPage={actualPage} lastPage={lastPage}></Nav>
    </div>
  )
}

export default App
