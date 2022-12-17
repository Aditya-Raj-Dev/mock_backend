const {Router}=require("express")

const {postJobs, getJobs}=require("../controller/jobs.controller")

const JobsRouter=Router()

JobsRouter.post("/",postJobs)

JobsRouter.get("/",getJobs)

module.exports=JobsRouter