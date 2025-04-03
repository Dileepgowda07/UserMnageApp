const mangoose = require('mangoose')
let UserSchema = new mangoose.Schema({

name:{
    type:string ,
    required: true
},
email:{
    type:string ,
    required: true
},
password:{
    type:string ,
    required: true
},
});
module,exports = mangoose.model('User',UserSchema)