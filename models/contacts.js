//this file woll have a conatct schema

const mongoose=require('mongoose');

const ContactSchema=mongoose.Schema({
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type:String,
        required:true
    },
    contact_number:{
        type:String,
        required:true
    }

});
const contact=module.exports=mongoose.model('contact',ContactSchema);