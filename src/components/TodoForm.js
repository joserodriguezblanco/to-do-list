import React,{useState} from 'react';

function TodoForm({onAddTask}) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene que la página se recargue al enviar el formulario
        // e.prevent.default(); //previene que la página se cargue vacía
        if (taskText.trim()){ //revisa que el texto no esté vacío
            onAddTask(taskText); //llamado a la función padre
            setTaskText('');
        }
        console.log('Añandiendo tarea:', taskText);
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