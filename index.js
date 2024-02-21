const express = require('express');
const cors = require('cors');
const app = express();
const port = 7001;

app.use(cors());

var corsOptions = {
	origin: ['https://flwn.dev', 'https://basil.florist'],
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

require('dotenv').config();

const method = 'user.getRecentTracks';
const apiKey = process.env.API_KEY;
const limit = '1';

app.get('/', cors(corsOptions), (req, res) => {
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

app.get('/chutoy', cors(corsOptions), (req, res) => {
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
