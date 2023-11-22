
const { Inquiry,Answer } = require("../models/Inquiry");
const User = require("../models/user");


exports.getAllInquiry = async(req, res)=>{
    const inquiry =await Inquiry.findAll({
        include:User
    }) 
    res.json(inquiry)

}


exports.answerQuestion = async(req, res)=>{
    qid = req.params.qid;
    const isExist = await Inquiry.findOne({where:{id:qid}})
    if(!isExist){
       res.send( "Question  Doesn't exist") 
    }
    const answer = await Answer.create({
        answer:req.body.answer,
        
        InquiryId:qid
    })
return res.json(answer)
}