var express = require('express');
var router = express.Router();

const peopleController = require('../controllers/peopleController')

/* GET users listing. */
router.get('/', peopleController.people_list});

router.get('/create', peopleController.person_create_get)

module.exports = router;
