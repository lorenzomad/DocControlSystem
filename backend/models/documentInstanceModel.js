const mongoose = require('mongoose')


const Schema = mongoose.Schema

const documentInstanceModelSchema = new Schema({
    revision: Number,
    file: String,
    uploadDate: {type: Date, default: Date.now() },
    status: {type: String, enum: ["In work", "Released", "Obsolete"]},
    // documentID: String, 
    // authorID: String,
    // approverID: String to replace with references
})

module.exports = mongoose.model("DocumentInstanceModel", documentInstanceModelSchema)