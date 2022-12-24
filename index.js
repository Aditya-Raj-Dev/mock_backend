const express =require("express")
const connection = require("./database/db")
const cors = require("cors")
const JobsRouter = require("./Route/Jobs.route")
const GameRouter=require("./Route/game.route")
  const SignupRouter = require("./Route/signup.route")

const app=express()

app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{
    res.send("welcome")
})

  app.use("/ticket",SignupRouter)
app.use("/game",GameRouter)



app.listen(8090,async()=>{
    try{
        await connection
        console.log("database connnected")
    }
    catch(e){
        console.log(e)
    }
    console.log("server Started backend")
})