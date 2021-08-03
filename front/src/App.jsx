import React, { useState, useEffect } from 'react';
import { TodoInput, TodoList } from './components';
import { todoClient } from './clients';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getAsyncTasks = async () => {
            const result = await todoClient.getAsyncTodos();

            if (result.success) {
                setTodos(result.data);
            }
        }

        getAsyncTasks();
    }, []);

    const onAddTask = (todo) => {
        setTodos(todos => [...todos, todo]);
        todoClient.insertAsyncTodo(todo.id, todo.text);
    };

    const onRemoveTask = (todoId) => {
        setTodos(todos => todos.filter(
            todoElement => todoElement.id !== todoId
        ));
        todoClient.removeAsyncTodo(todoId);
    }

    return (
        <div className="todo-container">
            <TodoInput onAddTask={onAddTask}/>
            <TodoList
                elements={todos}
                onRemoveTask={onRemoveTask}
            />
        </div>
    );
}

export default App;
