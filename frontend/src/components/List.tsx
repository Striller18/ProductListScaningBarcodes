import { listData } from "../types/types";

function List(props: listData){
    return (
        <div className="bg-darkGrey rounded-md py-3 px-2">
            {props.name}
        </div>
    )
}

export default List;