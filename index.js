import express from 'express';
import { readFileSync } from 'fs';
const app = express();

import axios from 'axios';

// const song = JSON.parse(readFileSync('./songs.json'));

// app.set('json spaces', 4);

app.use(express.json());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// app.get('/', (req, res) => {
// 	res.json(song);
// });

app.get('/redirect', async (req, res) => {
	const response = await axios.get(req.query.url);
	res.json({ url: response.request.res.responseUrl });
});

app.listen('3000', () => {
	console.log('Server is listening to port 3000');
});
