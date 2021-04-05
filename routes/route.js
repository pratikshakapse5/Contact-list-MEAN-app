const express=require('express'); //

const router=express.Router();
const contact =require('../models/contacts'); //bring the schema



router.get('/contacts', (req,res,next)=>{ 
    contact.find(function(err,conatcts){ //retureve data using find
        res.json(conatcts); //call back or function
    })
});


//add contact 
router.post('/contact',(req,res,next)=>{
let newContact=new contact({
first_name: req.body.first_name,
last_name:req.body.last_name,
contact_number:req.body.contact_number
});
newContact.save((err,conatct)=>{
    if(err)
    {
        res.json({msg:'failed to add conatacts'+err})
    }
    else{
        res.json({msg:'contacts added successfully'});
    }
});
});
router.delete('/contact/:id',(req,res,next)=>{
contact.remove({_id:req.params.id}, function(err,result){
    if(err)

    {
        res.json(err);
    }
    else{
        res.json(result);
    }
});
});
module.exports=router; //whwenever u create route youve to export as well
//it goes to package json and finds app.js and starts the server
