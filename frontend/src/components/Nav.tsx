import { FaUserAlt,FaListAlt } from 'react-icons/fa';
import { BiScan} from "react-icons/bi";

type navData = {
    actualPage: string;
    lastPage: string;
    changePage: (newPage: string) => void;
}

const iconActive = {
    "color": '#75BA75',
    "borderColor": '#548654',
    "transition": 'all ease-in 0.2s'
    // "fontSize": '2.6rem',
}

const navContainerStyle = {
    boxShadow: "0px -5px 10px rgba(25, 25, 25, 0.25)",
}

function Nav(props: navData){
    return (
        <div className='flex justify-between items-end px-14 py-4 fixed bottom-0 h-[4rem] w-full text-3xl' style = {navContainerStyle}>
            <div onClick={() => props.changePage("scan")}><BiScan       style={ props.actualPage === "scan" ? iconActive : {}}/></div>
            <div onClick={() => props.changePage("lists")}><FaListAlt   style={ props.actualPage === "lists" ? iconActive : {}}/></div>
            <div onClick={() => props.changePage("user")}><FaUserAlt    style={ props.actualPage === "user" ? iconActive : {}}/></div>
        </div>
    )
}

export default Nav;