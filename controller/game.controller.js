const GameModel =require("../Model/game.model");
const { use } = require("../Route/Jobs.route");

  const SignupGame=async(req,res)=>{
    const {name,level,score}=req.body;
    const data=await GameModel.create({
      name,score,level
    })
    res.send({"msg":"Signup successfully","data":data})
}

const updatescore=async(req,res)=>{
    const {_id,score}=req.body;
    const filter = {_id:_id};
   let user=await GameModel.find(filter).limit(1)
   let updatedscore=user[0].score+=score
    let update={score:updatedscore}
    let data=await GameModel.findOneAndUpdate(filter,update,{
        new:true
    })
    res.send({"msg":"Signup successfully","data":data})
}


module.exports={SignupGame,updatescore}