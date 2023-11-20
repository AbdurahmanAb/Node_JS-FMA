const Popup = require("../models/popUp")

exports.addPopup = async(req, res)=>{
const popup = await Popup.create(req.body)
return res.json(popup);

}
exports.getAllPopup = async (req, res)=>{
    const popUps = await Popup.findAll();
    return res.json(popUps)
}
exports.getOnePopup = async (req, res)=>{
    const id = req.params.id
    const popup = await Popup.findOne({where:{id:id}})
    return res.json(popup)
}