import { FaUserAlt,FaListAlt } from 'react-icons/fa';
import { BiScan} from "react-icons/bi";

type navData = {
    actualPage: string;
    lastPage: string;
}

const iconActive = {
    "color": "#75BA75",
    "border-color": "#548654"
}

function Nav(props: navData){
    return <div className='flex justify-evenly px-10 py-2.5 fixed bottom-0 w-full text-4xl'>
        <div><FaListAlt style={ props.actualPage === "lists" ? iconActive : {}}/></div>
        <div><BiScan    style={ props.actualPage === "scan" ? iconActive : {}}/></div>
        <div><FaUserAlt style={ props.actualPage === "user" ? iconActive : {}}/></div>
    </div>
    
}

export default Nav;