const mongoose = require('mongoose')
var express = require('express');
var router = express.Router();
var db = require('../db/conn.js')

router.get("/", async (req,res) => {
    
})

router.get("/:id", async (req,res) => {
    let collection = await db.collection("documents")
    let query = {_id: new ObjectId(req.params.id)}
    let results = await collection.findOne(query)

    if(!results) { res.send("Not found").status(404)}
    else {res.send(results).status(200)}
    
})

router.post("/", async (req,res) => {
    let newDocument = { 
        ID : req.body.ID,
        title: req.body.title,
    }
    let collection = await db.collection("documents")
    let results = await collection.insertOne(newDocument)
    res.send(results).status(204)
})

router.patch("/:id", async (req,res) => {
    const query = { _id: new ObjectId(req.params.id)}
    const updates = {
        $set: {
            ID: req.body.ID,
            title: req.body.title,
        }
    }

    let collection = await db.collection("documents")
    let results = await collection.updateOne(query, updates)

    res.send(results).status(200)
})


router.delete("/:id", async (req,res) => {
    const query = { _id: new ObjectId(req.params.id)}

    let collection = await db.collection("documents")
    let results = await collection.deleteOne(query)

    res.send(results).status(200)
})


module.exports = router;

