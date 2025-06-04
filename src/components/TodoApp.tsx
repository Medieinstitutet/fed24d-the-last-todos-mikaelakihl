// impoterar verktygslådan igen samt formulär och ritning för todo

import { useState } from "react"
import { Todo } from "../models/Todo"
import { TodoForm } from "./TodoForm"
import { Trash2 } from 'lucide-react';
import { Check } from 'lucide-react';
import { Undo2 } from 'lucide-react';
import { CalendarArrowUp } from 'lucide-react';
import { CalendarArrowDown } from 'lucide-react';

 
export const TodoApp = () => { // Bygger hela appen

    // const [todoList, setTodoList] = useState([     // Hårdkoda tre new todo i en lista som använder state - todolist 
    //     new Todo('Study', 'stressful', false),
    //     new Todo('Shop groceries', 'important', false),
    //     new Todo('Go to the gym', 'fun', false)
    // ])

    const [todoList, setTodoList] = useState<Todo[]>(() => {
        const stored = localStorage.getItem("todos");
        return stored
        ? JSON.parse(stored).map((t: Todo) => new Todo(t.title, t.emotion, t.isDone, t.id))
          : [
              new Todo("Study", "stressful", false),
              new Todo("Shop groceries", "important", false),
              new Todo("Go to the gym", "fun", false),
            ];
      });      

    // const addNewTodo = (newTodo: Todo) => {  // Skapa funktion för ny todo och lägg den sist i burken genom att skapa kopia ... 
    //     setTodoList((prevTodos) => [newTodo,...prevTodos]); 
    // }

    const addNewTodo = (newTodo: Todo) => {
        const updated = [newTodo, ...todoList];
        setTodoList(updated);
        localStorage.setItem("todos", JSON.stringify(updated));
      };
      
    // const handleDeleteTodoByID = (id: number) => {  //Tar emot id på todo och hanterar borttagning, anropas i Delete knappen.
    //     console.log("Innan filter:", todoList);
    //     console.log("Efter filter:", todoList.filter((todo) => todo.id !== id));
      
    //     setTodoList(todoList.filter((todo) => todo.id !== id));
    //   };

    const handleDeleteTodoByID = (id: number) => {
        const updated = todoList.filter((todo) => todo.id !== id);
        setTodoList(updated);
        localStorage.setItem("todos", JSON.stringify(updated));
      };
      
    
    // const toggleTodoIsDone = (id: number) => {
    //     setTodoList(
    //       todoList.map((todo) =>
    //         todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    //       )
    //     );
    //   };

    const toggleTodoIsDone = (id: number) => {
        const updated = todoList.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        );
        setTodoList(updated);
        localStorage.setItem("todos", JSON.stringify(updated));
      };
      

    const [sortNewTodoFirst, setSortNewTodoFirst] = useState(true);
    const [sortNewInactiveTodoFirst, setSortNewInactiveTodoFirst] = useState(false);

    const [emotionFilter, setEmotionFilter] = useState('all');
    const [emotionDoneFilter, setEmotionDoneFilter] = useState('all');

      const sortedActiveTodos = [...todoList]
        .filter(todo => !todo.isDone) // bara ofärdiga
        .filter(todo => emotionFilter === 'all' || todo.emotion === emotionFilter) // känsla
        .sort((a, b) => sortNewTodoFirst ? b.id - a.id : a.id - b.id); // sortera

        const sortedInactiveTodos = [...todoList]
        .filter(todo => todo.isDone) 
        .filter(todo => emotionDoneFilter === 'all' || todo.emotion === emotionDoneFilter) // känsla
        .sort((a, b) => sortNewInactiveTodoFirst ? b.id - a.id : a.id - b.id); // sortera


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
            <h2 className="text-lg font-bold mb-3 uppercase">Todos</h2>
            <div className="flex justify-end items-right mb-5">
                <button className="!bg-transparent" onClick={()=> setSortNewTodoFirst(prev => !prev)}>{sortNewTodoFirst? <CalendarArrowDown/>: <CalendarArrowUp />}</button> 
                <select className="text-center" value={emotionFilter} onChange={(e) => setEmotionFilter(e.target.value)}>
                        <option value={'all'}>All</option>
                        <option value={'fun'}>😃 Fun</option>
                        <option value={'stressful'}>😰 Stressful</option>
                        <option value={'important'}>❗ Important</option>
                        <option value={'boring'}> 😒 Boring</option>
                </select>
                </div>
                {sortedActiveTodos.map(todo => (
            <li key={todo.id} className={` flex justify-between items-center rounded-lg p-2 mb-2 transition-colors duration-300 bg-yellow-50 ${getBgColorForEmotion(todo)}`}>
            <span>{getEmotionEmoji(todo.emotion)}<span className="ml-5">{todo.title}</span></span> 
            <div className="flex gap-2 ml-2">
                
                <button onClick={()=> toggleTodoIsDone(todo.id)}>{todo.isDone? <Undo2 />: <Check />}</button> 
                <button onClick={() => {const confirmDelete = confirm("Are you sure you want to delete this todo?");
                if (confirmDelete) {handleDeleteTodoByID(todo.id);}}}>
                <Trash2 className="w-5 h-5" />
                </button>
            </div>  
            </li>
            ))}
        </ul>
        <ul>
            <h2 className="text-lg font-bold mb-2 uppercase">Finished todos</h2>
            <div className="flex justify-end items-right mb-5">
                <button className="!bg-transparent" onClick={()=> setSortNewInactiveTodoFirst(prev => !prev)}>{sortNewInactiveTodoFirst? <CalendarArrowDown/>: <CalendarArrowUp />}</button> 
                <select className="text-center" value={emotionDoneFilter} onChange={(e) => setEmotionDoneFilter(e.target.value)}>
                        <option value={'all'}>All</option>
                        <option value={'fun'}>😃 Fun</option>
                        <option value={'stressful'}>😰 Stressful</option>
                        <option value={'important'}>❗ Important</option>
                        <option value={'boring'}> 😒 Boring</option>
                </select>
                </div>
                {sortedInactiveTodos.map(todo => (
                <li key={todo.id} className="flex justify-between items-center rounded-lg p-2 mb-2 transition-colors duration-300 bg-yellow-50">
                <span className="ml-2">{todo.title}</span> 
                <div className="flex gap-2">
                    <button onClick={() =>handleDeleteTodoByID(todo.id)}><Trash2 className="w-5 h-5"/></button>
                    <button onClick={()=> toggleTodoIsDone(todo.id)}>{todo.isDone? <Undo2 />: 'Done'}</button>   
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