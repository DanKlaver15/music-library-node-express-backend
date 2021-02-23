const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const cors = require('cors');
const { validateProduct } = require('./middleware/products-validation');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function () {
	console.log("Server started. Listening on port 3000.");
});