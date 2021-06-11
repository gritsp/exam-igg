const mongoose = require('mongoose')
const lockerSchema = new mongoose.Schema({
    _id: Number,
    size: String,
    status: Boolean,
    time: Number
})
module.exports = mongoose.model('lockerDB',lockerSchema)