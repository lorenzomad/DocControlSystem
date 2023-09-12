const DocumentInstance = require('../models/documentInstanceModel')
const asyncHandler = require('express-async-handler')

//all documentInstances details
exports.documentInstance_list = asyncHandler(async (req,res,next) => {
    const allInstances = await DocumentInstance.find({}, "documentID revision status")
    .sort({documentID: 1})
    .exec()

    res.json(allInstances)
})

//specific documentInstance detail
exports.documentInstance_detail = asyncHandler(async(req,res,next ) => {
    res.send("TBD")
})

// create documentInstance post
exports.documentInstance_create_post = [
    // handle the request
    body("documentID")
    .trim()
    .escape(),

    asyncHandler( async (req,res,next) => {

        console.log(req.body)
        const errors = validationResult(req)
        const instance = new DocumentInstance({
            revision: req.body.revision,
            uploadDate: req.body.uploadDate,
            status: req.body.status,
            documentID: req.body.documentID,
        })

        if(!errors.isEmpty()) {
            //data contains vlaidation errors
            res.json("validation of the input failed");
            return 
        } else {
            //data validation passed
            const instanceExists = await DocumentInstance.findOne({ 
                documentID: req.body.documentID,
                revision: req.body.revision 
            }).exec();

            if (instanceExists) {
                // the person already exists, redirect
                // res.redirect(personExists.url)
            } else {
                // save the person
                await instance.save()
                // res.redirect(person.url)
            }
        }
})
]


//delete documentInstance post 
exports.documentInstance_delete_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})


// update post 
exports.documentInstance_update_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})