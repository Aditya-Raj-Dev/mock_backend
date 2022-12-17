const JobsModel =require("../Model/jobs.model")

  const postJobs=async(req,res)=>{
    const {company,city,location,role,level,contract,language,position}=req.body;
    const data=await JobsModel.create({
      company,city,location,role,level,contract,language,position
    })
    res.send({"msg":data})
}

const getJobs=async(req,res)=>{
  const data= await JobsModel.find()
   res.send({"msg":data})
}




module.exports={postJobs,getJobs,}