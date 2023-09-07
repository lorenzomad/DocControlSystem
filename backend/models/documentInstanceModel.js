const mongoose = require('mongoose')


const Schema = mongoose.Schema

const documentInstanceSchema = new Schema({
    revision: {type:Number, required: true},
    file: String, // probably to be replaced with the actual file
    uploadDate: {type: Date, default: Date.now() },
    status: {type: String, enum: ["In work", "Released", "Obsolete"]},
    documentID: {type: Schema.Types.ObjectId, ref: "Document", required: true}, 
    authorID: {type: Schema.Types.ObjectId, ref: "People"},
    approverID: {type: Schema.Types.ObjectId, ref: "People"}
})

documentInstanceSchema.virtual("url").get( function () {
    return `documents/${this.documentID}/${this.revision}`
})

module.exports = mongoose.model("DocumentInstance", documentInstanceSchema)