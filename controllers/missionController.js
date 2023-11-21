const Mission = require("../models/mission")

exports.getAllMission = async (req, res)=>{
    const mission = await Mission.findAll();
    return res.json(mission)
}
exports.getOneMission = async (req, res)=>{
const id = req.params.id
    const mission = await Mission.findOne({where:{id:id}})
    return res.json(mission)
}

exports.updateMission = async (req, res)=>{
    const id = req.params.id
    const mission = Mission.update(req.body, {
        where:{id:id}
    })

    return res.json("updated successfully")

}

exports.addMission = async(req, res)=>{
    const mission = await Mission.create(
        req.body
    )
    return res.json(mission)
}

exports.deleteMission = async(req, res)=>{
    const id = req.params.id
    try {
        const deleted = await Mission.destroy({where:{id:id}})
    return res.json(deleted);
    } catch (error) {
        res.json("already Deleted"); 
    }
    
}