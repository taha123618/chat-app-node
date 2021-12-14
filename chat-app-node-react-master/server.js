const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const  bodyParser= require('body-parser')
const morgan = require('morgan')
var jwt = require('jsonwebtoken');
const UserModel = require('./dbConnection/auth')
const dotenv = require("dotenv");
const app = express()
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT
const SERVER_SECRET = process.env.SERVER_SECRET
const auth = require('./auth/authRoutes')
const conversation = require('./auth/conversation')
const message = require('./auth/message')
require("./dbConnection/dbConnection");
app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/', auth);
app.use('/', conversation);
app.use('/', message);


app.use(function (req, res, next) {
    console.log(req.cookies.jwtoken);
    if (!req.cookies.jwtoken) {
      res.status(401).send("include http-only credentials with every request");
      return;
    }
    jwt.verify(req.cookies.jwtoken, SERVER_SECRET, function (err, decodedData) {
      if (!err) {
        const issueDate = decodedData.iat * 1000;
        const nowDate = new Date().getTime();
        const diff = nowDate - issueDate;
  
        if (diff > 300000) {
          res.status(401).send("token expired");
        } else {
          var token = jwt.sign(
            {
              id: decodedData.id,
              email: decodedData.email,
              role: decodedData.role,
            },
            SERVER_SECRET
          );
          res.cookie("jwtoken", token, {
            maxAge: 86400000,
            httpOnly: true,
          });
          req.body.jwtoken = decodedData;
          req.headers.jwtoken = decodedData;
          next();
        }
      } else {
        res.status(401).send("invalid token");
      }
    });
  });
  
  app.get("/profile", async (req, res) => {
    console.log("profile", req.body.jwtoken);
    try{
        const profile =  await UserModel.findById(req.body.jwtoken.id,"name email")
        if(profile){
            res.status(200).send({
                profile: profile,
              });
        }else{
            res.status(403).send({
                message: "chlo shaba kato",
              });
        }    
    } catch(err){
        console.log("err" ,err)
    }
  });

app.listen(PORT, function(){
    console.log('server is running: '+ PORT)
})