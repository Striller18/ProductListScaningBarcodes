import List from "../components/List";
import {listData} from "../types/types";

type listsData = {
    lists:  listData[];
}

function Lists(props: listsData){
    return (
        <div className='justify-evenly w-full'>
            <div className="flex w-full gap-2">
                <button className="bg-green rounded-full py-1 w-36 ">Crear Lista</button>
                <select className="w-60 rounded-full px-3 bg-darkGrey">
                    <option value="">default</option>
                </select>
            </div>
            <div id="listsContainer" className="mt-5 grid gap-3">
                {
                   props.lists.map((list: listData)=> <List key={list.id} {...list}/>)
                }
            </div>
        </div>
    )
}

export default Lists;