const { EmailValidator } = require('@angular/forms');
const mongoose=require('mongoose');
const userSchema= mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    pwd:String,
    tel:String,
    role:String
 
});

const user=mongoose.model('user',userSchema);
module.exports=user;