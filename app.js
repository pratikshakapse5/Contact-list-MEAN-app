//import modules
var express= require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors =require('cors');
var path =require('path');

var app=express();

const route=require('./routes/route');
mongoose.connect('mongodb://localhost:27017/contactlist'); //connect database
mongoose.connection.on('connected',()=>{
    console.log("connected 27017");
})
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error'+err);
    }

})
//define a port number
const port =3001;
//adding middleware - cors
app.use(cors());
//body-parser 
app.use(bodyparser.json());

//static files in the folder
app.use(express.static(path.join(__dirname,'public')));
//use the route whatever /api goes to routes.js 
app.use('/api',route);
//add routes to home page testing server later all 
//routers will be in separate file
app.get('/',(req,res)=>{
    res.send('test')
})

//bind server iwth port
app.listen(port,()=>{
    console.log("Server started and at port:"+port);
});