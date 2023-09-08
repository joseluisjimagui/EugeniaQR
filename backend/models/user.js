const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,        
    },
    lastname: {
        type: String,
        required: true,        
    },
    email: {
        type: String,
        required: true,   
        unique: true     
    },
    password: {
        type: String,
        required: true,        
    },
    noApartment: {
        type: Number,
        required: true,        
    },
    date: {
        type: Date,
        default: Date.now
    },    
}, {
    timestamps: true
});

module.exports = model('User', userSchema)