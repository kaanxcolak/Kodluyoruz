import {useContext} from "react";
import {TodoListContext} from "./TodoListContext";  //19.06

function Filter(){
    const [todos] = useContext(TodoListContext);    
    return(
        <div>
            <a href="#">All ({todos.length}) </a>
            <a href="#">Completed ({todos.filter(x => x.completed).length}) </a>
            <a href="#">Uncompleted ({todos.filter(x => !x.completed).length})  </a>
        </div>
    )
}

export default Filter;
