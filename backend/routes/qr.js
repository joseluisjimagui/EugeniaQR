const app = require('express')
const router = app.Router();
const qrCtrl = require('../controllers/qr.controllers')

router.route('/')
    .get(qrCtrl.getQrs)
    .post(qrCtrl.postQr)

router.route('/:id')
    .get(qrCtrl.getQr)    
    .put(qrCtrl.updateQr)
    .delete(qrCtrl.deleteQr)

  module.exports = router 