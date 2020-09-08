const express = require('express');
const app = express();
const port = 4001;
const pool = require('../database/config.js');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(express.static('client/dist'));
app.use('/:id', express.static('client/dist'));

app.get('/api/images/:location', (req, res) => {
  const query = 'SELECT * FROM images WHERE location_id = $1';
  const location = [req.params.location];
  pool.query(query, location, (error, results) => {
    if (error) {
      console.log(error);
    }
    res.status(200).send(results.rows[0].image_urls);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});