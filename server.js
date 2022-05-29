const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require("path");
// const router=express.Router();

const app = express();
 
dotenv.config({path:'config.env'})
const PORT=process.env.PORT || 8080

// log requests
app.use(morgan('tiny'))


// parse request to body prase
app.use(bodyparser.urlencoded({extended:true}))

// set view engine
app.set('views engine',"html");
app.set('views engine', 'jade');
app.engine('html', require('ejs').renderFile);
app.set('views engine', 'html');

app.set("views",path.resolve(__dirname,"/views/index"))
app.set("views",path.resolve(__dirname,"/views/update_user"))
app.set("views",path.resolve(__dirname,"/views/add_user"))

// load assests
app.use('/css',express.static(path.resolve(__dirname,"assest/css")))
app.use('/img',express.static(path.resolve(__dirname,"assest/img")))
app.use('/js',express.static(path.resolve(__dirname,"assest/js")))
// app.use('/index',express.static(path.resolve(__dirname,"views/index.html")))
// app.use('/add_user',express.static(path.resolve(__dirname,"views/add_user.html")))
// app.use('/update_user',express.static(path.resolve(__dirname,"views/update_user.html")))


// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/views/index.html'));
// })

app.get('/',function(req,res){
    res.render(__dirname+'/views/index.html');
})
 app.get('/add-user',(req,res)=>{
    res.render(__dirname+'/views/add_user.html');
})

app.get('/update-user',(req,res)=>{
    res.render(__dirname+'/views/update_user.html');
})



 app.listen(3000,()=>{console.log(`Server is running on https://localhost:${PORT}`)})