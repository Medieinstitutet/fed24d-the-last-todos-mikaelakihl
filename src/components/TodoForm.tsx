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
        <form onSubmit={handleSubmit} className="space-y-2">
                <h2 className="text-2xl font-bold mb-2">Add Todo</h2>
                <div className="max-w-md mx-auto">
                <label>
                    Name of Todo 
                    <input className="w-full p-2 border bg-yellow-100 border-white rounded" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </label>
                </div>
                <div className="max-w-md mx-auto">
                <label>
                    <select className="w-full p-2 border bg-yellow-100 border-white rounded" value={emotion} onChange={(e)=>setEmotion(e.target.value)}>
                        Emotion?
                        <option value={''}>Feeling</option>
                        <option value={'fun'}>😃 Fun</option>
                        <option value={'stressful'}>😰 Stressful</option>
                        <option value={'important'}>❗ Important</option>
                        <option value={'boring'}> 😒 Boring</option>
                    </select>
                </label>
                </div>
                {/* <div className="max-w-md mx-auto">
                <label>
                    Is done? 
                    <input type="checkbox" checked={isDone} onChange={(e)=>setIsDone(e.target.checked)} />
                </label>
                </div> */}
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



