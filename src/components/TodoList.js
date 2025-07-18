import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onToggleComplete, onDelete }) {
    return (
        <ul>
            {tasks.map(task => (
                <TodoItem 
                    key={task.id} 
                    task={task} 
                    onToggleComplete={onToggleComplete} 
                    onDelete={onDelete} 
                />
            ))}
        </ul>
    );
}
export default TodoList;