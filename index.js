const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const cors = require('cors');
const { validateProduct } = require('./middleware/products-validation');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start server on port 3000
app.listen(3000, function () {
	console.log("Server started. Listening on port 3000.");
});

/*======================================================================*/

// GET endpoints
app.get('/api/music', (req, res) => {
	const songs = repoContext.songs.findAllSongs();
	return res.send(songs);
});

// Get a specific product by ID
app.get('/api/music/:id', (req, res) => {
	const id = req.params.id;
	const songs = repoContext.songs.findSongById(id);
	return res.send(songs);
});

