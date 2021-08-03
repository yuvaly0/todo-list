import axios from 'axios';
import { todoClientUrl } from '../../config';

const insertAsyncTodo = async (id, text) => {
	const body = {
		id,
		text
	};

	await axios.post(`${todoClientUrl}/insert`, body);
};

const removeAsyncTodo = async (id) => {
	const body = {
		id
	};

	await axios.post(`${todoClientUrl}/remove`, body);
};

const CheckTaskAsync = async (id, isChecked) => {
	const body = {
		id
	};

	const route = isChecked ? 'markDone' : 'markUnDone';
	await axios.post(`${todoClientUrl}/${route}`, body);
}

const getAsyncTodos = async () => {
	const result = await axios.get(`${todoClientUrl}/todos`);

	if (result.status === 200) {
		return {
			success: true,
			data: result.data
		}
	}

	return {
		success: false
	}
};

export default {
	getAsyncTodos,
	insertAsyncTodo,
	removeAsyncTodo,
	CheckTaskAsync
};