import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const renderTodos = () => (
        <>
            {todos.map(todo => (
                <Todo
                    task={todo.task}
                    removeTodo={removeTodo}
                    id={todo.id}
                    key={todo.id}
                />
            ))}
        </>
    );

    const addTodo = data => {
        let newTodo = { ...data, id: uuid() };
        setTodos(todos => [...todos, newTodo]);
    };

    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }
    
    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo}/>
            <div className="TodoList-Todos">
                {renderTodos()}
            </div>
        </div>
    );
};

export default TodoList;