const express = require('express')
const router = express.Router()

const prisonerController = require('../controllers/prisonerController')


// grabs list of all prisoners
router.get('/prisoners',prisonerController.prisoners)


router.get('/prisoners/:id',prisonerController.prisoner)

router.get('/greet/person',prisonerController.greet)

router.get('/search/prisoner',prisonerController.searchPrisoner)




module.exports = router;