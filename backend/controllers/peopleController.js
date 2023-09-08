const People = require('../models/peopleModel')
const asyncHandler = require('express-async-handler')

//all people details
exports.people_list = asyncHandler(async (req,res,next) => {
    res.send("TBD")
})

//specific person detail
exports.person_detail = asyncHandler(async(req,res,next ) => {
    res.send("TBD")
})

// create person post
exports.person_create_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})

//delete person post 
exports.person_delete_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})


// update post 
exports.person_update_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})