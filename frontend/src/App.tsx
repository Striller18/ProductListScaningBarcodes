import { MouseEventHandler, useState, ReactElement} from 'react';
import Nav  from "./components/Nav";
import './css/App.css';
import Lists from './pages/Lists';
import Scan from './pages/Scan';
import db from './assets/dbTmp.json';

function App() {
  const [count, setCount] = useState(0)
  const [actualPage, setActualPage] = useState<string>("scan")
  const [lastPage, setLastPage] = useState<string>("")


  const pages: Record<string, ReactElement>= {
    lists: <Lists lists={db.lists}/>,
    user: <h1>User</h1>,
    scan: <Scan></Scan>,
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
