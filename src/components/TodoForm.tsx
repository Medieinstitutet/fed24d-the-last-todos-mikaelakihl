import { useState, type FormEvent } from "react" // Importera verktygslådan - verktyg för att komma ihåg saker, Något som hjälper oss att veta när vi trycker på knappen i formulär och ritningen för vår todo
import { Todo } from "../models/Todo";

type TodoFormProps = {
    onAddTodo: (todo: Todo) => void;
}


export const TodoForm = ({onAddTodo}:TodoFormProps) => {   //Vi bygger ett formulär och om någon fyller i ropar vi "Här är nytt att göra"

    const [title, setTitle] = useState('');   // States: Tre tomma burkar, en för namn, känsla och om den är klar
    const [emotion, setEmotion] = useState('');
    const [isDone, setIsDone] = useState(false);

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();

        const newTodo = new Todo (title, emotion, isDone);

        onAddTodo(newTodo);

        setTitle('');
        setEmotion('');
        setIsDone(false);
    }



    return(
        <form onSubmit={handleSubmit}>
                <h2>Add Todo</h2>
                <label>
                    Todo-name
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </label>
                <label>
                    <select value={emotion} onChange={(e)=>setEmotion(e.target.value)}>
                        Emotion?
                        <option value={''}>Feeling</option>
                        <option value={'fun'}>Fun</option>
                        <option value={'stressful'}>Stressful</option>
                        <option value={'important'}>Important</option>
                        <option value={'boring'} >Boring</option>
                    </select>
                </label>
                <label>
                    Is done? 
                    <input type="checkbox" checked={isDone} onChange={(e)=>setIsDone(e.target.checked)} />
                </label>
                <button>Add</button>
            </form>
    )
}



// Hantera submit genom att stoppa omladdning av sidan 

// Dags att bygga en todo utifrån informationen titel, emotion och isDone

//Skicka iväg todon 

// Tvättan sen av burkarna genom att tömma dom igen. 

// I vår return skapar vi ett formulär med 2 input fält, en text och en checkbox. Även select följt av 5 options. 
// I formulär finns även knap/ input submit?  "add"
// Det som skrivs inputs sparas i tillhörande burk gneom att ange value 



