import server from './server';

server.listen(8080, '0.0.0.0', (err, address) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log(`server listening on ${address}`);
})