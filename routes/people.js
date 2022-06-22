const express = require('express')
const router = express.Router()
const Mongo = require('../model/Mongo')

router.get('/add', async (req, res) => {
    res.render('addPeople')
})

router.post('/add', async (req, res) => {
    const {
        name,
        surname,
        number,
        group,
        month,
        score
    } = req.body

    const people = new Mongo({
        name,
        surname,
        number,
        group,
        month,
        score
    })

    await people.save()
    res.redirect('/')
})



module.exports = router