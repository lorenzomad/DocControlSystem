const mongoose = require('mongoose')
var express = require('express');
var router = express.Router();

let documentController = require('../controllers/documentController.js')

router.get("/", documentController.documents_list)

router.get("/:id", documentController.document_detail)

router.get('/create', documentController.document_create_get)

router.post('/create', documentController.document_create_post)

router.get('/:id/delete', documentController.document_delete_get)

router.post('/:id/delete', documentController.document_delete_post)

router.get('/:id/update', documentController.document_update_get)

router.post('/:id/update', documentController.document_update_post)




module.exports = router;

