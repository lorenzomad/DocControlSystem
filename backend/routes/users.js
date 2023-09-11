var express = require('express');
var router = express.Router();

const peopleController = require('../controllers/peopleController')

/* GET users listing. */
router.get('/', peopleController.people_list);

router.get('/:id', peopleController.person_detail);

router.post('/create', peopleController.person_create_post)

router.delete('/', peopleController.person_delete_post)


router.put('/', peopleController.person_update_post)


module.exports = router;
