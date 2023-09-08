const Document = require('../models/documentModel')
const asyncHandler = require('express-async-handler')

//all documents details
exports.documents_list = asyncHandler(async (req,res,next) => {
    res.send("TBD")
})

//specific document detail
exports.document_detail = asyncHandler(async(req,res,next ) => {
    res.send("TBD")
})


// create document post
exports.document_create_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})



//delete document post 
exports.document_delete_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})


// update post 
exports.document_update_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})