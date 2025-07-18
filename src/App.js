import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [tasks, setTasks] = useState([]);
    const [nextId, setNextId] = useState(1);

    const addTask = (text => {
        const newTask = { id: nextId, text, completed: false }; // Crear una nueva tarea
        setTasks([...tasks, newTask]); //Añadir la nueva tarea al final de la lista
        setNextId(nextId + 1); 
    });

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !==id)); // Filtrar la tarea que se quiere eliminar
    };

    return (
        <div className="App">
            <h1>Lista de Tareas</h1>
            <TodoForm onAddTask={addTask} />
            <TodoList 
                tasks={tasks} 
                onToggleComplete={toggleComplete} 
                onDelete={deleteTask} 
            />
        </div>
    );
    
}
export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


