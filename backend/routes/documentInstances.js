const mongoose = require('mongoose')
var express = require('express');
var router = express.Router();

let documentInstanceController = require('../controllers/documentInstanceController.js')

router.get("/", documentInstanceController.documentInstance_list)

router.get("/:id", documentInstanceController.documentInstance_detail)

router.post('/create', documentInstanceController.documentInstance_create_post)

router.post('/:id/delete', documentInstanceController.documentInstance_delete_post)

router.post('/:id/update', documentInstanceController.documentInstance_update_post)


module.exports = router;
