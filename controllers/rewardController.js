const Mission = require("../models/mission");
const Reward = require("../models/user_reward");
const User = require("../models/user")

exports.getTotalReward = async(req , res)=>{
    id = req.params.id;
    mid = req.params.mid;
    const data = await User.findAll({
        where:{
            id:id,
         
        },
        include:{
model:Mission,
through:Reward
        }
    })
    res.json(data);
    
}