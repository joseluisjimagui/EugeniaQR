const usersCtrl = {}

const User = require('../models/user')

usersCtrl.getUsers = async(req, res)  => {
    const newUsers = await User.find();
    res.json(newUsers)
}

usersCtrl.postUsers = async(req, res)  => {
    console.log(req.body)
    const newUser = await new User({
        name: req.body.name,        
        lastname: req.body.lastname,        
        email: req.body.email,        
        password: req.body.password,        
        noApartment: req.body.noApartment,        
        date: req.body.date,        
    })
    newUser.save();
    console.log(newUser)
    res.json({message: 'User Saved'})    
}

usersCtrl.getUser = async(req, res)  => {
    console.log(req.body)
    const newUser = await User.findById(req.body.id)
    console.log(newUser)
    res.json({message: 'Getting User'})

}

usersCtrl.updateUser = async(req, res)  => {
    console.log(req.body)
    await User.findOneAndUpdate({_id: req.body.id}, {                
        name: req.body.name,        
        lastname: req.body.lastname,        
        email: req.body.email,        
        password: req.body.password,        
        noApartment: req.body.noApartment,        
        date: req.body.date,    
    })
    res.json({message: 'Updating User'})
}

usersCtrl.deleteUser = async(req, res)  => {
    await User.findByIdAndDelete(req.params.id)
    res.json({message: 'Deleting User'})
}

module.exports = usersCtrl