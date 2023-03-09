const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3003;

const app = express();
var cors = require('cors') 

app.use(cors({
  origin: '*'
}));

app.get('/api', (req, res) => {
  axios.get(`https://www.reddit.com/search.json?q=${req.query.q}&sort=new`)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Internal Server Error 500');
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
