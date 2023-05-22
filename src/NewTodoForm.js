import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
    
    const INITIAL_STATE = { task: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE);
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input
                id="task"
                name="task"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;