const qrCtrl = {}

const qr = require('../models/qr')

qrCtrl.getQrs = async(req, res)  => {
    const newQrs = await qr.find();
    res.json(newQrs)
}

qrCtrl.postQr = async(req, res)  => {
    console.log(req.body)
    const newQr = await new qr({
        fullname: req.body.fullname,                
        entryday: req.body.entryday,                      
        entrytime: req.body.entrytime,                      
        checkoutdate: req.body.checkoutdate,                      
    })
    newQr.save();
    console.log(newQr)
    res.json({message: 'Qr Saved'})    
}

qrCtrl.getQr = async(req, res)  => {
    console.log(req.body)
    const newQr = await qr.findById(req.body.id)
    console.log(newQr)
    res.json({message: 'Getting Qr'})

}

qrCtrl.updateQr = async(req, res)  => {
    console.log(req.body)
    await qr.findOneAndUpdate({_id: req.body.id}, {                
        fullname: req.body.fullname,                
        entryday: req.body.entryday,                      
        entrytime: req.body.entrytime,                      
        checkoutdate: req.body.checkoutdate,   
    })
    res.json({message: 'Updating Qr'})
}

qrCtrl.deleteQr = async(req, res)  => {
    await qr.findByIdAndDelete(req.params.id)
    res.json({message: 'Deleting Qr'})
}

module.exports = qrCtrl