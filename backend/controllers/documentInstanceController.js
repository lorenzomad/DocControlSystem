const DocumentInstance = require('../models/documentInstanceModel')
const asyncHandler = require('express-async-handler')

//all documentInstances details
exports.documentInstance_list = asyncHandler(async (req,res,next) => {
    res.send("TBD")
})

//specific documentInstance detail
exports.documentInstance_detail = asyncHandler(async(req,res,next ) => {
    res.send("TBD")
})

// create documentInstance post
exports.documentInstance_create_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})


//delete documentInstance post 
exports.documentInstance_delete_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})


// update post 
exports.documentInstance_update_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})