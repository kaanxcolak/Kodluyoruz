import { useState, useContext } from "react";
import { TodoListContext } from "./TodoListContext";

function TodoForm() {
    const [value, setValue] = useState("");
    const [, setTodos] = useContext(TodoListContext);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setTodos(prevState => [...prevState, { id: new Date().toISOString(), content: value, completed: false },
            ]);
            setValue("");
        }}>
            <input type="text" placeholder="What needs to be done?"
                value={value}
                onChange={e => setValue(e.currentTarget.value)} />
            <input type="submit" placeholder="Add" />


        </form>
    );
}

export default TodoForm;
