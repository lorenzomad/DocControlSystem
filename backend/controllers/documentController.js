const Document = require('../models/documentModel')
const asyncHandler = require('express-async-handler')
const {body, validationResult } = require('express-validator')

//all documents details
exports.documents_list = asyncHandler(async (req,res,next) => {
    const allDocs = await Document.find({}, "title")
    .sort({title: 1})
    .exec()

    res.json(allDocs)
})

//specific document detail
exports.document_detail = asyncHandler(async(req,res,next ) => {
    const document = await Document.findOne({
        title: req.body.title,
    })

    res.json(document)
})


// create document post
exports.document_create_post = [
    body("title")
    .trim()
    .isLength({min:3})
    .escape(),


    
    asyncHandler( async (req,res,next) => {

        const errors = validationResult(req)
        const document = new Document({
            title: req.body.title,
        })

        if(!errors.isEmpty()) {
            //data contains vlaidation errors
            res.json("validation of the input failed");
            return 
        } else {
            //data validation passed
            const documentExists = await Document.findOne({ 
                title: req.body.title 
            }).exec();

            if (documentExists) {
                // the person already exists, redirect
                res.json("the document already exists")
            } else {
                // save the document
                await document.save()
                res.json(document)
            }
        }
    
    })
]



//delete document post 
exports.document_delete_post = asyncHandler( async (req,res,next) => {
    
    const document = Document.findOneAndRemove({title: req.body.title}).exec()

    if (document === null) {
        res.json("No document found")
    } else {
        res.json(`the document ${document.title} was eliminated`)
    }

})


// update post 
exports.document_update_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})