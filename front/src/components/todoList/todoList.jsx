import React, {useState, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import TodoElement from '../todoElement';
import { todoClient } from '../../clients';
import './todoList.css';

const TodoList = ({ elements, onRemoveTask }) => {
    const [todos, setTodos] = useState(elements);
    const [isAll, setIsAll] = useState(true);
    const [hadChangedChecked, setHasChangedChecked] = useState(false);

    useEffect(() => {
        setTodos(elements);
    }, [elements]);

    const filteredTodos = useMemo(() => {
        if (!isAll) {
            return todos.filter(todo => todo.ischecked);
        }

        return todos;
    }, [isAll, todos]);

    const onClickShowAll = () => setIsAll(true);

    const onClickShowDone = () => setIsAll(false);

    const onTodoChecked = (todoId) => {
        const todoElement = todos.filter(todoElement => (
            todoElement.id === todoId
        ))[0];

        todoElement.ischecked = !todoElement.ischecked;
        todoClient.CheckTaskAsync(todoId, todoElement.ischecked);
        setHasChangedChecked(prev => !prev);
    };

    return (
        <div className='todo-table-container'>
            <div className='buttons-container'>
                <button
                    className='button todo-list-button'
                    onClick={onClickShowAll}
                >
                    All
                </button>
                <button
                    className='button todo-list-button'
                    onClick={onClickShowDone}
                >
                    Done
                </button>
            </div>

            <div className='todo-list-container'>
                {
                    filteredTodos
                    && filteredTodos.map(todo => (
                        <TodoElement
                            key={todo.id}
                            todoElement={todo}
                            onTodoChecked={onTodoChecked}
                            onRemoveTodo={onRemoveTask}
                        />
                    ))
                }
            </div>
        </div>
    );
};

TodoList.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        ischecked: PropTypes.bool
    })),
    onRemoveTask: PropTypes.func,
};

TodoList.defaultProps = {
    elements: [],
    onRemoveTask: () => {}
};

export default TodoList;