const mongoose = require('mongoose');

async function runDB(){
    await mongoose.connect( process.env.DATABASE_URI ? process.env.DATABASE_URI: 'mongodb://localhost/test');

    console.log(`Example db listening on URI ${process.env.DATABASE_URI}`)

}

runDB();