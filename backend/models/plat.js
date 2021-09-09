const mongoose=require('mongoose');
const platSchema= mongoose.Schema({
    name:String,
    price:Number,
    description:String
});

const plat=mongoose.model('plat',platSchema);
module.exports=plat;