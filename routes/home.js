const express = require('express')
const router = express.Router()
const Mongo = require('../model/Mongo')

router.get('/', async (req, res) => {
    const people = await Mongo.find().sort({ score: -1})
    res.render('index', {
        people
    })
})

module.exports = router