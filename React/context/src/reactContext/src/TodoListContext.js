import { createContext,useState } from "react";


export const TodoListContext = createContext(null);

export function TodoListProvider({ children }) {

    const [todos, setTodos] = useState([
        { id: 1, content: "HTML", completed: false },
        { id: 2, content: "CSS", completed: true },
        { id: 3, content: "Javascript", completed: false },
        { id: 4, content: "React", completed: true },
        {id:5,content:"Vue",completed:false},
        {id:5,content:"Angular",completed:false},


    ]);
    return (
        <TodoListContext.Provider value={[todos,setTodos]} >
            {children}

        </TodoListContext.Provider>
    )
}