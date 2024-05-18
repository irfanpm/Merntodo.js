const express = require('express')
const { register,login,addNewTAsk,isCompletedtask,updateUserProfile,editTask,deleteTask } = require('../controller/user')
const router=express.Router()
const tryCatch = require('../middleware/tryCatchMiddleware')
const jwtAuth=require('../middleware/jwtAuthentication')
router.post('/register',register)
router.post('/login', login)
router.post('/user/updateProfile',jwtAuth,tryCatch(updateUserProfile))
router.post('/task/addtask',jwtAuth,addNewTAsk)
router.post('/task/edittask',jwtAuth,editTask)
router.post('/task/deletetask',jwtAuth,deleteTask)
router.post('/task/iscompleted',jwtAuth,isCompletedtask)



module.exports=router
