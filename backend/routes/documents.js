const mongoose = require('mongoose')
var express = require('express');
var router = express.Router();

let documentController = require('../controllers/documentController.js')

router.get("/", documentController.documents_list)

router.get("/:id", documentController.document_detail)

router.post('/create', documentController.document_create_post)

router.post('/:id/delete', documentController.document_delete_post)

router.post('/:id/update', documentController.document_update_post)




module.exports = router;

