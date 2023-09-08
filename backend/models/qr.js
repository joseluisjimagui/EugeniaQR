
const {Schema, model} = require('mongoose');

const qrSchema = new Schema({
    fullname: {
        type: String,
        required: true,        
    },
    entryday: {
        type: Date,
        default: Date.now,        
    }, 
    entrytime: {
        type: Number,
        default: Date.now
    }, 
    checkoutdate: {
        type: Date,
        default: Date.now,        
    }, 
       
}, {
    timestamps: true
});

module.exports = model('qr', qrSchema)