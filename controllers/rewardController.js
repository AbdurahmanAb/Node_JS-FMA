const Mission = require("../models/mission");
const Reward = require("../models/user_reward");

exports.getTotalReward = async(req , res)=>{
    id = req.params.id;
    mid = req.params.id;
    const data = await User.findAll({
        where:{
            userId:id,
            missionId:mid
        },
        include:{
model:Mission,
through:Reward
        }
    })
    res.json(data);
    
}