const express = require('express');
const carsRouter  = require('../Routers/cars-router.js');
const server = express();


server.use(express.json());
server.use('/api/cars',carsRouter);

server.get('/', (req,res) => {
    res.send('<h1>&emsp;&emsp;&emsp; API  IS  WORKING  👨‍💻 </h1>')
})

module.exports = server;