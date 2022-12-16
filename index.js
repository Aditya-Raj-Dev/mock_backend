const express =require("express")
const connection = require("./database/db")
const UserModel=require("./Model/model")
const EmiModel =require("./Model/Emi.model")
const cors = require("cors")
const ListModel = require("./Model/list.model")
const ListRouter = require("./Route/list.route")

const app=express()
app.use(express.json())
app.use(cors())
app.get("/",async(req,res)=>{
    res.send("welcome")
})

app.use("/list",ListRouter)


app.listen(8080,async()=>{
    try{
        await connection
        console.log("database connnected")
    }
    catch(e){
        console.log(e)
    }
    console.log("server Started backend")
})