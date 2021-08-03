import { dbService } from '../../services';

const apiRouter = (fastify, opts, done) => {
	fastify.get('/todos', async (req, res) => {
		try {
			const result = await dbService.getAll();

			res.status(200).send(result.rows);
		}
		catch (e) {
			res.status(500).send(e);
		}
	});

	fastify.post('/insert', async (req, res) => {
		const {id, text} = req.body;

		try {
			await dbService.addTask(id, text);
			res.status(200).send('Inserted succesfully');
		}
		catch (e) {
			res.status(400).send(`Got error while trying to add task - ${e}`);
		}
	});

	fastify.post('/remove', async (req, res) => {
		const {id} = req.body;

		try {
			const result = await dbService.removeTask(id);

			if (result.rowCount === 1) {
				res.status(200).send('Removed succefully');
			}
			else {
				res.status(400).send('Bad id');
			}
		}
		catch (e) {
			res.status(500).send(`Got error while trying to remove task - ${e}`);
		}
	});

	fastify.post('/markDone', async (req, res) => {
		const {id} = req.body;

		try {
			const result = await dbService.markTaskDone(id);

			if (result.rowCount === 1) {
				res.status(200).send('Updated state');
			}

			res.status(400).send('Bad id');
		}
		catch (e) {
			res.status(500).send(e);
		}
	});

	fastify.post('/markUnDone', async (req, res) => {
		const {id} = req.body;

		try {
			const result = await dbService.markTaskUndone(id);

			if (result.rowCount === 1) {
				res.status(200).send('Updated state');
			}

			res.status(400).send('Bad id');
		}
		catch (e) {
			res.status(500).send(e);
		}
	});

	done();
};

export default apiRouter;