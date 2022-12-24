const {Router}=require("express")
const { signup, Login, Ticketcreate } = require("../controller/ticekt.controller")



const SignupRouter=Router()

SignupRouter.post("/signup",signup)
SignupRouter.post("/login",Login)
SignupRouter.post("/",Ticketcreate)


module.exports=SignupRouter