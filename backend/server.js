const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routers/user')
require('dotenv').config()




const app = express()
mongoose.connect('mongodb://localhost:27017/mernStackTodo')
const port =process.env.Port||8080

app.use(express.json())
app.use(cors())
app.use('/api',userRouter)



app.listen(port,()=>{
    console.log(`Successfully connected ${port}`)
})