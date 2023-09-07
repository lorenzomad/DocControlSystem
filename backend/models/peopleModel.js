const mongoose = require('mongoose')

const Schema = mongoose.Schema

const peopleModelSchema = new Schema({
    name: String,
    role: String,
})




mongoose.model("PeopleModel", peopleModelSchema)