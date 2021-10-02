const mongoose = require('mongoose')
const todoSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    
    content:{
        type:String,
        required:true
      
    },
    completed:{
        type:Boolean,
        default:false
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
    
   
}, {timeStamps: true})

const Todo = mongoose.model('Todo', todoSchema )
module.exports = Todo