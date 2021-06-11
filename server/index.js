const express = require('express')
const mongoose = require('mongoose')
const locker = require('./routes/locker')
const cors = require('cors')
const path = require('path');
const app = express()
app.use(cors())

require('dotenv').config()

app.use(express.json())

app.get('/' ,(req,res) => {
    res.send("Hello")
})

app.use('/api/locker', locker)

const port = process.env.PORT || 3000
const db = process.env.dbKey
const server = app.listen(port, () => console.log(`Sever is running on port ${port}`))
// app.listen(port, () => console.log(`Sever is running on port ${port}`))

mongoose.connect(db,{ useUnifiedTopology: true ,useNewUrlParser: true})
    .then(result =>{
        console.log("mongo connected")
    })
    .catch(err => console.log(err))

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  })
io.on('connection', (socket) =>{
    console.log('User connected')
    socket.on('toServer', (data) =>{
        console.log(`from user: ${data}`)
        io.emit('toUser', data)
    })
})



