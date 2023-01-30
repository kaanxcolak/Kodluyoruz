import Navbar from "./Navbar";
import TodoList from "./TodoList";
import { TodoListProvider } from "./TodoListContext"
import TodoForm from "./TodoForm";

function App() {
  return (
    <TodoListProvider>
      <div>
        <Navbar />
        <TodoList />
        <TodoForm />
      </div>
    </TodoListProvider>


  )

}

export default App;