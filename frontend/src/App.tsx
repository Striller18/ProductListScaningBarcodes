import { MouseEventHandler, useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav  from "./components/Nav";
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [actualPage, setActualPage]= useState("lists")
  const [lastPage, setLastPage]= useState("")

  const btnClick = (newPage: string)=> {
    setLastPage(actualPage); 
    setActualPage(newPage)
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => btnClick("lists")}>lists</button>
        <button onClick={() => btnClick("scan")}>scan</button>
        <button onClick={() => btnClick("user")}>user</button>
      </div>
      <Nav actualPage={actualPage} lastPage={lastPage}></Nav>
    </div>
  )
}

export default App
