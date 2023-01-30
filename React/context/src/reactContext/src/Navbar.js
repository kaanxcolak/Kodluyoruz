import {useContext} from "react";
import {TodoListContext} from "./TodoListContext";

function Navbar() {
    const [todos] = useContext(TodoListContext);
    return (
        <nav>
            <h2>Yaman ({todos.length})</h2>
        </nav>
    )
}

export default Navbar;
