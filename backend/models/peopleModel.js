const mongoose = require('mongoose')

const Schema = mongoose.Schema

const peopleSchema = new Schema({
    firstName: String,
    lastName: String,
    role: String,
})

peopleSchema.virtual("url").get( function () {
    return `/people/${this._id}`
})


mongoose.model("People", peopleSchema)