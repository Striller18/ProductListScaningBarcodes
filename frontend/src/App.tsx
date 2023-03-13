import { MouseEventHandler, useState, ReactElement} from 'react';
import Nav  from "./components/Nav";
import './css/App.css';
import Lists from './pages/Lists';

function App() {
  const [count, setCount] = useState(0)
  const [actualPage, setActualPage] = useState("lists")
  const [lastPage, setLastPage] = useState("")

  const lists = [
    {id:0, name: "prueba1", products: [{}], members: [{}]},
    {id:0, name: "prueba2", products: [{}], members: [{}]},
    {id:0, name: "prueba3", products: [{}], members: [{}]},
  ];

  const pages: Record<string, ReactElement>= {
    lists: <Lists lists={lists}/>,
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
