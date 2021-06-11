const express = require('express')
const lockerDB = require('../models/lockerDB')
const router = express.Router()

router.post('/', (req,res) =>{
    const locker = new lockerDB({
        _id: req.body._id,
        size: req.body.size,
        status: req.body.status,
        time: req.body.time
    })

    locker.save()
        .then(result =>{
            res.send({
                massage: "Data has been created.",
                data: result
            })
        })
        .catch(err => {
            console.log("post data error",err)
            res.send(err)
        })
})

router.get('/', (req,res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    lockerDB.find()
        .then(locker =>{
            res.send({
                massage: "fetch data success.",
                data: locker
            })
        })
        .catch(err => {
            console.log("fetch data error",err)
            res.send(err)
        })
})

router.get('/:id', (req,res) => {
    const lockerId = req.params.id
    lockerDB.findById(lockerId)
        .then(locker =>{
            res.send({
                massage: "fetch data by id",
                data: locker
            })            
        })
        .catch(err => {
            console.log("fetch data error",err)
            res.send(err)
        })
})

router.put('/:id', (req,res) =>{
    const lockerId = req.params.id
    lockerDB.findById(lockerId)
        .then(locker => {
            locker._id = locker._id,
            locker.size = locker.size,
            locker.status = req.body.status,
            locker.time = req.body.time

            return locker.save()
        })
        .then(result => {
            res.send({
                massage: "Update status and time success",
                data: result
            })
        })
        .catch(err => {
            console.log("Edit data error",err)
            res.send(err)
        })
})

router.delete('/:id', (req,res) => {
    const lockerId = req.params.id
    lockerDB.findByIdAndDelete(lockerId)
        .then(
            res.send({
                massage: "Data has been deleted"
            })
        )
        .catch(err => {
            console.log("cant delete data error",err)
            res.send(err)
        })
})

module.exports = router