import { useEffect, useState } from "react";

interface IData {
    limit: number,
    skip: number,
    todos: TodoData[],
    total: number,
}

interface TodoData {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

function ListItem (props: TodoData): JSX.Element {
    const {completed, id, todo} = props;
    const [checked, setChecked] = useState(completed);

    function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
        event.target.checked ? setChecked(true) : setChecked(false);
    }

    return (
        <div>
        <input type="checkbox" value={id} checked={checked} onChange={handleCheck} />
        <label htmlFor={id.toString()} className={checked ? "checked" : ""}>{todo}</label>
        </div>
    );
}

export default function Checklist () {
    const [todos, setTodos] = useState<TodoData[] | null>(null);
    

    useEffect( () => {
        async function fetchToDos () {
        try {
            const response = await fetch ("https://dummyjson.com/todos?limit=25")
            const data: IData = await response.json();
            setTodos(data.todos);
            console.log(todos);
            
        } catch (error) {
            console.error(error);
        }
    }
    fetchToDos();
    
    }, []);

    return (
        <>
        { todos ? (
            todos.map((oneTodo) => {
                return <ListItem {...oneTodo} key={oneTodo.id} />;
            })
         ) : "Loading..."
        }
        </>
    )
}

const a = {
    "id": 1,
    "todo": "Do something nice for someone I care about",
    "completed": true,
    "userId": 26
  }