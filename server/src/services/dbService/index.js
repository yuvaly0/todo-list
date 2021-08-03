import { Pool } from 'pg';
import { QUERIES } from './consts';

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'todo_list',
	port: 5432
});

const addTask = (id, text) => {
	const query = QUERIES.INSERT_ONE(id, text);
	return pool.query(query);
};

const removeTask = (id) => {
	const query = QUERIES.DELETE_ONE(id);
	return pool.query(query);
};

const markTaskDone = (id) => {
	const query = QUERIES.MARK_TASK_DONE(id);
	return pool.query(query);
};

const markTaskUndone = (id) => {
	const query = QUERIES.MARK_TASK_UNDONE(id);
	return pool.query(query);
};

const getAll = () => {
	const query = QUERIES.GET_ALL();
	return pool.query(query);
}

export default {
	addTask,
	removeTask,
	markTaskDone,
	markTaskUndone,
	getAll
};


