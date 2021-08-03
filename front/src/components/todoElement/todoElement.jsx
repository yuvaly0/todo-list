import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import './todoElement.css';

const TodoElement = ({ todoElement, onTodoChecked, onRemoveTodo }) => (
    <div className='todo-task-container'>
        <span className={todoElement.ischecked
            ? 'todo-text-marked'
            : 'todo-text-unmarked'
        }>
            {
                todoElement.text
            }
        </span>
        <div className='todo-task-options'>
            <input
                type='checkbox'
                defaultChecked={todoElement.ischecked}
                onClick={() => onTodoChecked(todoElement.id)}
            />
            <FaTrashAlt onClick={() => onRemoveTodo(todoElement.id)}/>
        </div>
    </div>
);

TodoElement.propTypes = {
    todoElement: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        ischecked: PropTypes.bool
    }),
    onTodoChecked: PropTypes.func,
    onRemoveTodo: PropTypes.func
};

TodoElement.defaultProps = {
    todoText: 'default-text',
    onTodoChecked: () => {},
    onRemoveTodo: () => {}
};

export default TodoElement;