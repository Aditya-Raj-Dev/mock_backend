const {Router}=require("express")
const { signup, Login, Ticketcreate, showAllticket } = require("../controller/ticekt.controller")



const SignupRouter=Router()

SignupRouter.post("/signup",signup)
SignupRouter.post("/login",Login)
SignupRouter.post("/",Ticketcreate)
SignupRouter.post("/all",showAllticket)


module.exports=SignupRouter