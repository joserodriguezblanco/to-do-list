import React from "react";

function TodoItem({ task, onToggleComplete, onDelete }) {
    return (
        <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
            <button onClick={() => onToggleComplete(task.id)}>
                {task.completed ? "Deshacer" : "Completar"}
            </button>
            <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </li>
    );
}

export default TodoItem;