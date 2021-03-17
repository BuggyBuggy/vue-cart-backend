const express = require('express')
let router = express.Router()

const SampleController 		= require('../controllers/SampleController')

router.get('/', SampleController.index)

module.exports = router
