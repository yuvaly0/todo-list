import apiRouter from './api';

const rootRouter = async (fastify, options, done) => {
	await fastify.register(apiRouter, {prefix: 'api'});

	done();
};

export default rootRouter;