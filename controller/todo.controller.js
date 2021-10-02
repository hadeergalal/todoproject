const e = require('express')
const Todo = require('../models/todo.model')

 const addTodo=async (req, res)=>{
   
    try{
        const todo = new Todo({
            ...req.body,
            userId: req.user._id
        })
        await todo.save()
        res.status(200).send( { apiStatus:true, data:todo, message:" todo added"})
    }
    catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message: "error adding  todo data" })
    }
}
const allTodos=async(req,res)=>{
    try{
     const todos= await Todo.find({})
     res.send(todos)
    }
    catch(e){
        res.send(e)
    }
}

const mytodos= async (req,res)=>{
        try{
            await req.user.populate('mytodos')
            

            res.status(200).send( { 
                apiStatus:true, 
                data:req.user.mytodos,
                 message:"data added"})
        }
        catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message: "error adding todo data" })
        }
    }
    const singleTodo=async(req,res)=>{
        try{
            const todo=await Todo.findById(req.params.id)
            if(!todo)res.send("not todo found")
            res.status(200).send({
                apiStatus:true,
                data:todo,
                message:"sucess"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error show single todo"
            })
        }
       
    }
const deleteTodo=async(req,res)=>{
        try{
            const todo=  await Todo.findByIdAndDelete(req.params.id)
            if(!todo) res.send("not data found" )
             res.status(200).send({
                 apiStatus:true,
                 data:todo,
                 message:"deleted"

             })


        }
        catch(e)
        {
            res.status(500).send({ apiStatus:false, data:e.message, message: "error delet todo data" })
        }
    }

const editTodo= async (req,res)=>{
        try{
            const todo = await Todo.findById(req.params.id)
            
            for(let d in req.body){
                todo[d] = req.body[d]
            }
            await todo.save()
            res.status(200).send( { apiStatus:true, data:"", message:"data added"})
        }
        catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message: "error adding todo data" })
        }

    }

   
   


module.exports = {addTodo,mytodos,editTodo,allTodos,deleteTodo,singleTodo}
