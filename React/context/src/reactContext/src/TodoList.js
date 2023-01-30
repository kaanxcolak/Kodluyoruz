//taskları bir listede oluşturmak için useState oluştur
import { useContext} from "react";
import Filter from "./Filter";
import {TodoListContext} from "./TodoListContext";

function TodoList() {
    const [todos, setTodos] = useContext(TodoListContext);

    return (
        <div>
        <Filter todos={todos}/>
            <ul>
                {todos.map(todo => (   //map olduğu için döndürmede her eleman için key kullanırız.
                    <li key={todo.id}>{todo.content}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default TodoList;