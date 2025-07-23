import React from "react";

function TodoItem({ task, onToggleComplete, onDelete }) {
    return (
        <li> <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
             {task.text}  </span>
            <button class="bnt-completar" onClick={() => onToggleComplete(task.id)}>
                {task.completed ? "Deshacer" : "Completar"}
            </button>
            <button class="bnt-quitar" onClick={() => onDelete(task.id)}>Eliminar</button>
        </li>
    );
}

export default TodoItem;