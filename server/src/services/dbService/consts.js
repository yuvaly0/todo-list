const QUERIES = {
	INSERT_ONE: (id, text) => `INSERT INTO todos (id, text) VALUES ('${id}', '${text}');`,
	DELETE_ONE: (id) => `DELETE FROM todos WHERE id = '${id}';`,
	MARK_TASK_DONE: (id) => `UPDATE todos SET isChecked = true WHERE id = '${id}';`,
	MARK_TASK_UNDONE: (id) => `UPDATE todos SET isChecked = false WHERE id = '${id}';`,
	GET_ALL: () => 'SELECT * FROM todos;'
};

export {
	QUERIES
};