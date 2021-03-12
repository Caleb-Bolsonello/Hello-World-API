const express = require('express');
const Character_Randomizer = require('./generate_character');
const app = express();

var randomizer = new Character_Randomizer();

app.get('/', (req, res) => {
    console.log(req.socket.remoteAddress);
    res.send(randomizer.generate_character());
});

app.listen(8080, () => {
  console.log(`Listening...`)
});
