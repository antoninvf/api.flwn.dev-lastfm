const express = require('express');
const app = express();
const port = 7001;

require('dotenv').config();

const method = 'user.getRecentTracks';
const apiKey = process.env.API_KEY;
const limit = '1';

app.get('/', (req, res) => {
	const user = 'flowyan';

	const url = `http://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${apiKey}&user=${user}&limit=${limit}&format=json`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			res.send(data);
		})
		.catch((error) => {
			console.log(error);
		});
});

app.get('/chutoy', (req, res) => {
	const user = 'chutoyjohn';

	const url = `http://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${apiKey}&user=${user}&limit=${limit}&format=json`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			res.send(data);
		})
		.catch((error) => {
			console.log(error);
		});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
