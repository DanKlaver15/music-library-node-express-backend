const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const cors = require('cors');
const { validateSong } = require('./middleware/music-validation');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start server on port 3000
app.listen(5000, function () {
	console.log("Server started. Listening on port 5000.");
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
	const song = repoContext.songs.findSongById(id);
	return res.send(song);
});

/*======================================================================*/

// POST endpoint
app.post('/api/music', [validateSong], (req, res) => {
	const newSong = req.body;
	const addedSong = repoContext.songs.createSong(newSong);
	return res.send(addedSong);
});

/*======================================================================*/

// PUT endpoint
app.put('/api/music/:id', [validateSong], (req, res) => {
	const id = req.params.id;
	const songPropertiesToUpdate = req.body;
	const updatedSong = repoContext.songs.updateSong(id, songPropertiesToUpdate);
		return res.send(updatedSong)
});

/*======================================================================*/

// DELTE endpoint (for 1 record)
app.delete('/api/music/:id', (req, res) => {
	const id = req.params.id;
	const updatedDataSet = repoContext.songs.deleteSong(id); 
	return res.send(updatedDataSet);
});

/*======================================================================*/

// DELTE endpoint (for multiple records)
app.delete('/api/music/resources?:songs', (req, res) => {
	const songs = req.params.queryString;
	const updatedDataSet = repoContext.songs.deleteSongs(songs); 
	return res.send(updatedDataSet);
});