const app = require('express')
const router = app.Router();
const usersCtrl = require('../controllers/users.controllers')

router.route('/')
    .get(usersCtrl.getUsers)
    .post(usersCtrl.postUsers)

router.route('/:id')
    .get(usersCtrl.getUser)    
    .put(usersCtrl.updateUser)
    .delete(usersCtrl.deleteUser)

  module.exports = router 