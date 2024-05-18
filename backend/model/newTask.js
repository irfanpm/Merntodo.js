const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId ,
        ref:'user'
    },
    title:{
        type:String,
        require:true
    },
    descrption:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    isCompleted:{
        type:Boolean,
        require:true
    },




})
module.exports= mongoose.model('task',taskSchema)