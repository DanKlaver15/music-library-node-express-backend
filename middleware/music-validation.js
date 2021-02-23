exports.validateSong = (req, res, next) => {
	const data = req.body;
		if(
	(data.hasOwnProperty('title') && typeof(data.name) === 'string')&&
	(data.hasOwnProperty('album') && typeof(data.description) === 'string') &&
	(data.hasOwnProperty('artist') && typeof(data.category) === 'string') &&
	(data.hasOwnProperty('genre') && typeof(data.price) === 'number') &&
	(data.hasOwnProperty('releaseDate') && typeof(data.price) === 'number')
	){
		return next();
	} else {
		return res.status(400).send({error: 'Missing required properties.'});
	} }