const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({
    title:{
        type:String
    },
    status:{
        type:String,
        enum:['to-do','in-progress','done'],
        default:'to-do'
    },
    desCription:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    }
},{
    timestamps:true
}) 
module.exports = Task = mongoose.model('Task',taskSchema);