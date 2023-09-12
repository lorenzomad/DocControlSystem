const People = require('../models/peopleModel')
const asyncHandler = require('express-async-handler')
const {body, validationResult } = require('express-validator')


//all people details
exports.people_list = asyncHandler(async (req,res,next) => {
    const allPeople = await People.find({}, "firstName lastName role")
    .sort({firstName: 1})
    .exec()

    console.log(allPeople)
    res.json(allPeople)
})

//specific person detail
exports.person_detail = asyncHandler(async(req,res,next ) => {
    const person = await People.findOne({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    res.json(person)
})

// create person post
exports.person_create_post = [
    // data validation
    body("firstName")
    .trim()
    .isLength({min:3})
    .escape(),

    body("lastName")
    .trim()
    .isLength({min:3})
    .escape(),

    body("role")
    .trim()
    .isLength({min:3})
    .escape(),

    // handle the request
    asyncHandler( async (req,res,next) => {

        console.log(req.body)
        const errors = validationResult(req)
        const person = new People({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            role: req.body.role
        })

        if(!errors.isEmpty()) {
            //data contains vlaidation errors
            res.json("validation of the input failed");
            return 
        } else {
            //data validation passed
            const personExists = await People.findOne({ 
                firstName: req.body.firstName,
                lastName: req.body.lastName 
            }).exec();

            if (personExists) {
                // the person already exists, redirect
                // res.redirect(personExists.url)
            } else {
                // save the person
                await person.save()
                // res.redirect(person.url)
            }
        }
})
]

//delete person post 
exports.person_delete_post = asyncHandler( async (req,res,next) => {
    const person = await People.findOneAndRemove({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    if (person === null) {
        res.json("No person found")
    } else {
        res.json(`the person ${person.firstName}, ${person.lastName} was eliminated`)
    }


})


// update post 
exports.person_update_post = asyncHandler( async (req,res,next) => {
    res.send("TBD")
})