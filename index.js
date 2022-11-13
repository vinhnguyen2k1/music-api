import Express from 'express';
import songs from './songs.json';
const app = Express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', (req, res) => {
	res.json(songs);
});

app.listen('3000', () => {
	console.log('Server is listening to port 3000');
});
