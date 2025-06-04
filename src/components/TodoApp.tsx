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

      const getBgColorForEmotion = (todo: Todo) => {
        if (!todo.isDone) return 'bg-white';
        switch (todo.emotion) {
            case 'fun': return 'bg-green-200';
            case 'stressful': return 'bg-yellow-200';
            case 'important': return 'bg-red-200';
            case 'boring': return 'bg-gray-300';
            default: return 'bg-white';

        }
      };

      const getEmotionEmoji = (emotion: string): string => {
        switch (emotion) {
          case 'fun':
            return '😃';
          case 'stressful':
            return '😰';
          case 'important':
            return '❗';
          case 'boring':
            return '😒';
          default:
            return '❓';
        }
      };
      
      
    
    return(
    <section className=" p-10 space-y-4">

        <div className="bg-yellow-50 p-4">
          <TodoForm onAddTodo={addNewTodo}/>  
        </div>

        <div className="grid grid-cols-1 mt-50 md:grid-cols-2 gap-20">
        <ul>
            <h2 className="text-lg font-bold mb-2">Todos</h2>
            {todoList.filter(todo=>!todo.isDone).map(todo => (
            <li key={todo.id} className={` flex justify-between items-center rounded p-2 mb-2 transition-colors duration-300 bg-yellow-50 ${getBgColorForEmotion(todo)}`}>
            <span>{todo.title} {getEmotionEmoji(todo.emotion)}</span> 
            <div className="flex gap-2">
                <button onClick={() =>handleDeleteTodoByID(todo.id)}>Delete</button>
                <button onClick={()=> toggleTodoIsDone(todo.id)}>{todo.isDone? 'Undo': 'Done'}</button> 
            </div>  
            </li>
            ))}
        </ul>
        <ul>
            <h2 className="text-lg font-bold mb-2">Finished todos</h2>
            {todoList.filter(todo=>todo.isDone).map(todo => (
                <li className="flex justify-between items-center rounded p-2 mb-2 transition-colors duration-300 bg-yellow-50">
                <span>{todo.title}</span> 
                <div className="flex gap-2">
                    <button onClick={() =>handleDeleteTodoByID(todo.id)}>Delete</button>
                    <button onClick={()=> toggleTodoIsDone(todo.id)}>{todo.isDone? 'Undo': 'Done'}</button>   
                </div>
                </li>
            ))}
        </ul>
        </div>
    </section>
)
    
}    





// Skapa funktion för att radera todo genom filter som ska triggas av Delete knapp

// Skapa funktion för att toggla done or not done genom att använda map och triggas av Done knapp 

// returnera ul med li element genom map och knapp för add och delete. Använd 