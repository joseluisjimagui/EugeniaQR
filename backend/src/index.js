require('dotenv').config()
const app = require('./app')
require('./database')

async function main(){    
    await app.listen(process.env.BACKEND_PORT)
    console.log(`App listening on port ${process.env.BACKEND_PORT}`)

}

main();