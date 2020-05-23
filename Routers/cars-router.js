const express = require('express');
const dbCar = require('../data/db-config.js');

const router = express.Router();
router.use( (req,res,next) => {
    console.log('in cars router')
    next();
})

router.get('/', async (req,res) => {
    try{
        const carDatas =  await dbCar('cars') 
        res.status(200).json(carDatas)
    }catch{
        res.status(500).json({errorMessage: "Server Error "})
    }
})

module.exports = router;