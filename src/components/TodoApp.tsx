// impoterar verktygslådan igen samt formulär och ritning för todo

import { useState } from "react"
import { Todo } from "../models/Todo"
import { TodoForm } from "./TodoForm"

 
export const TodoApp = () => { // Bygger hela appen

    const [todoList, setTodoList] = useState([     // Hårdkoda tre new todo i en lista som använder state - todolist 
        new Todo('Study', 'stressful', false),
        new Todo('Shop groceries', 'important', false),
        new Todo('Go to the gym', 'fun', false)
    ])

    const addNewTodo = (newTodo: Todo) => {  // Skapa funktion för ny todo och lägg den sist i burken genom att skapa kopia ... 
        setTodoList((prevTodos) => [...prevTodos,newTodo]); 
    }

    const handleDeleteTodoByID = (id: number) => {  //Tar emot id på todo och hanterar borttagning, anropas i Delete knappen.
        console.log("Innan filter:", todoList);
        console.log("Efter filter:", todoList.filter((todo) => todo.id !== id));
      
        setTodoList(todoList.filter((todo) => todo.id !== id));
      };
    
    const toggleTodoIsDone = (id: number) => {
        setTodoList(
          todoList.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
      };
      
    
    return(
    <section>
        <TodoForm onAddTodo={addNewTodo}/>
        <ul>
            {todoList.filter(todo=>!todo.isDone).map(todo => (
                <li>
                {todo.title} {todo.emotion} {todo.isDone ? 'Done': 'Not done yet'}
                <button onClick={() =>handleDeleteTodoByID(todo.id)}>Delete</button>
                <button onClick={()=> toggleTodoIsDone(todo.id)}>{todo.isDone? 'Undo': 'Done'}</button>   
                </li>
            ))}
        </ul>
        <ul>
            {todoList.filter(todo=>todo.isDone).map(todo => (
                <li>
                {todo.title} {todo.emotion} {todo.isDone ? 'Done': 'Not done yet'}
                <button onClick={() =>handleDeleteTodoByID(todo.id)}>Delete</button>
                <button onClick={()=> toggleTodoIsDone(todo.id)}>{todo.isDone? 'Undo': 'Done'}</button>   
                </li>
            ))}
        </ul>
    </section>
)
    
}    





// Skapa funktion för att radera todo genom filter som ska triggas av Delete knapp

// Skapa funktion för att toggla done or not done genom att använda map och triggas av Done knapp 

// returnera ul med li element genom map och knapp för add och delete. Använd 