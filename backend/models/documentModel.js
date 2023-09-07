const mongoose = require('mongoose')

const Schema = mongoose.Schema

const documentModelSchema = new Schema({
    title: String,
})

module.exports = mongoose.model("DocumentModel", documentModelSchema)