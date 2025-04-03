
const mangoose = require("mangoose")
let connectDB= async ()=>{
    await mangoose.connect(process.env.MANGO_URL)
    .then(()=> console.log('Connected to DB'))
    .catch(()=>console.log('failed to connnect to DB'))
}
module.exports = connectDB
