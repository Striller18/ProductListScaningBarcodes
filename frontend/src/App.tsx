import { MouseEventHandler, useState, ReactElement} from 'react';
import Nav  from "./components/Nav";
import './css/App.css';
import Lists from './pages/Lists';
import db from './assets/dbTmp.json';

function App() {
  const [count, setCount] = useState(0)
  const [actualPage, setActualPage] = useState("lists")
  const [lastPage, setLastPage] = useState("")


  const pages: Record<string, ReactElement>= {
    lists: <Lists lists={db.lists}/>,
    user: <h1>User</h1>,
    scan: <h1>Scan</h1>,
  }

  const handlerChangeNav = (newPage: string) => {
    setLastPage(actualPage); 
    setActualPage(newPage)
  }

  return (
    <div className="flex justify-center">
      {pages[actualPage]}
      <Nav changePage={handlerChangeNav} actualPage={actualPage} lastPage={lastPage} ></Nav>
    </div>
  )
}

export default App
