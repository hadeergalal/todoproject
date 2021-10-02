const router = require('express').Router()
const todoController = require('../controller/todo.controller')
const auth = require('../middleware/a')

router.get('/alltodos',todoController.allTodos)

router.post('/addtodo',auth,todoController.addTodo)
router.delete('/deletetodo/:id',auth,todoController.deleteTodo)
router.get('/mytodos', auth, todoController.mytodos)
router.patch('/edittodo/:id', auth, todoController.editTodo)
router.get('/singletodo/:id',auth,todoController.singleTodo)


module.exports=router