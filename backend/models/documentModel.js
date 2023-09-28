const mongoose = require('mongoose')

const Schema = mongoose.Schema

const documentSchema = new Schema({
    title: String,
})

documentSchema.virtual("url").get( function () {
    return `/documents/${this._id}`
})



module.exports = mongoose.model("Document", documentSchema)