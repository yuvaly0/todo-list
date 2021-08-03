import fastify from 'fastify';
import fastifyCors from 'fastify-cors'
import rootRouter from './routes';

const server = fastify();

server.register(fastifyCors);
server.register(rootRouter);


export default server;