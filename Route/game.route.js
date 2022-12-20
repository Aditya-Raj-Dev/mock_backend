const {Router}=require("express")

const {SignupGame, updatescore}=require("../controller/game.controller")

const GameRouter=Router()

GameRouter.post("/",SignupGame)

GameRouter.post("/update",updatescore)

module.exports=GameRouter