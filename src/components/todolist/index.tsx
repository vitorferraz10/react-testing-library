import { useState } from "react";

const TodoList = () => {
   const [todos, setTodos] = useState<string[]>([]);
   const [valueTodo, setValueTodo] = useState("");

   function handleSubmit(ev: { preventDefault: () => void }) {
      ev.preventDefault();
      setTodos([...todos, valueTodo]);
      setValueTodo("");
   }
   return (
      <>
         <h1>TodoList</h1>
         <div>
            <form onSubmit={handleSubmit} data-testid="form-todo">
               <input
                  type="text"
                  data-testid="input-todo"
                  placeholder="Add todo"
                  value={valueTodo}
                  onChange={(ev: { target: { value: string } }) =>
                     setValueTodo(ev.target.value)
                  }
                  required
               />
               <button>Add</button>
            </form>

            <ul>
               {todos.map((todo, index) => (
                  <li data-testid="item-add-todo" key={index}>
                     {todo}
                     <button
                        onClick={() => setTodos(todos.filter((_, i) => i !== index))}
                        data-testid="btn-delete-task"
                     >
                        Delete
                     </button>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};

export default TodoList;
