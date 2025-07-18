import React,{useState} from 'react';

function TodoForm({onAddTask}) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.prevent.default(); //previene que la página se cargue vacía
        if (taskText.trim()){ //revisa que el texto no esté vacío
            onAddTask(taskText); //llamado a la función padre
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Añadir nueva tarea"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button type="submit">Añadir Tarea</button>
        </form>
    );
}

export default TodoForm;