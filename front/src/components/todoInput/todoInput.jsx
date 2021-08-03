import React, { useRef } from 'react';
import { makeId } from "../../utils";
import { ID_LEN } from "../../constants";
import './todoInput.css';

const TodoInput = ({ onAddTask }) => {
    const todo = useRef();

    const innerAddTask = (todoText) => {
        const todoObject = {
            id: makeId(ID_LEN),
            text: todoText,
            isChecked: false
        }

        onAddTask(todoObject);
    }

    return (
        <>
            <h2 className='todo-headline'>
                Todo:
            </h2>
            <div className='todo-input-container'>
                <input
                    className='todo-input-text'
                    placeholder='add new task'
                    type='text'
                    ref={todo}
                />
                <button
                    className='button todo-input-button'
                    onClick={() => innerAddTask(todo.current.value)}>
                    Add new task
                </button>
            </div>
        </>
    );
};

export default TodoInput;