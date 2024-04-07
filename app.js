const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user.route.js')
require('./confiq/db.js')

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/api/users",userRouter)


app.get('/',(req, res) => {
    res.sendFile(__dirname + "/./views/index.html")
})
//invalid route
app.use((req, res, next) => {
    res.status(404).json({message: "Page not found"})
})


//server error
app.use((err, req, res, next) => {
    res.status(500).json({message: "Something Broke"})
})


module.exports = app