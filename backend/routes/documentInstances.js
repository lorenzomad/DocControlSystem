const mongoose = require('mongoose')
var express = require('express');
var router = express.Router();

let documentInstanceController = require('../controllers/documentInstanceController.js')

router.get("/", documentInstanceController.documents_list)

router.get("/:id", documentInstanceController.document_detail)

router.get('/create', documentInstanceController.document_create_get)

router.post('/create', documentInstanceController.document_create_post)

router.get('/:id/delete', documentInstanceController.document_delete_get)

router.post('/:id/delete', documentInstanceController.document_delete_post)

router.get('/:id/update', documentInstanceController.document_update_get)

router.post('/:id/update', documentInstanceController.document_update_post)




module.exports = router;
