const express = require('express')
const router = express.Router()

const GuardController = require('../controllers/GuardController')


// grabs list of all prisoners
router.get('/Guards',GuardController.Guards)

router.get('/Guards/:id',GuardController.Guard)



router.get('/GuardList',GuardController.Guard)

 router.get('/delete',GuardController.delete)




module.exports = router;