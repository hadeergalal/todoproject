const router = require('express').Router()
const auth = require('../middleware/a')
const userController = require('../controller/user.controller')
const multer=require('multer')
const upload=require('../middleware/fileUploaded')


router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout',auth, userController.logOut)
router.post('/logoutAll',auth, userController.logOutAll)
router.post('/me',auth,userController.me)
router.post('/addPImg', auth, upload.single('img'), userController.addPImg)




module.exports = router