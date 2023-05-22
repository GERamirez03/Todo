import React from 'react';

const Todo = ({ task, id, removeTodo }) => {
    return (
        <div>
            <p>{task}</p>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}

export default Todo;