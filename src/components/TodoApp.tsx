// impoterar verktygslådan igen samt formulär och ritning för todo

import { useState } from "react"
import { Todo } from "../models/Todo"

 
export const TodoApp = () => { // Bygger hela appen

    const [todoList, setTodoList] = useState([     // Hårdkoda tre new todo i en lista som använder state - todolist 
        new Todo('Study', 'stressful', false),
        new Todo('Shop groceries', 'important', false),
        new Todo('Go to the gym', 'fun', false)
    ])

    console.log(setTodoList);
    
    return(
    <section>
        <ul>
            {todoList.map((todo) => (
                <li>
                {todo.title} {todo.emotion} {todo.isDone ? 'Done': 'Not done yet'}   
                </li>
            ))}
        </ul>
    </section>
)
    
}    



// Skapa funktion för ny todo och lägg den sist i burken genom att skapa kopia ... 

// Skapa funktion för att radera todo genom filter som ska triggas av Delete knapp

// Skapa funktion för att toggla done or not done genom att använda map och triggas av Done knapp 

// returnera ul med li element genom map och knapp för add och delete. Använd 