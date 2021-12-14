var express = require('express')
var bcrypt = require("bcrypt-inzi")
var jwt = require('jsonwebtoken');
var router = express.Router();
var SERVER_SECRET = process.env.SERVER_SECRET
const UserModel = require('../dbConnection/auth')

router.post("/signup", async (req, res, next) => {
    console.log("body",req.body)
    const {name,email,password} = req.body
    if (!name
        || !email ||
        !password) {

        res.status(403).send(`
            please send name, email, passwod in json body.
            e.g:
            {
                "name": "jahanzaib",
                "email": "jahanzaib@gmail.com",
                "password": "123",
            }`)
        return;
    }
    try{
        const result = await UserModel.findOne({ email: email })
        console.log("result",result)
        if(!result){
            const bycrptSuccess = await bcrypt.stringToHash(password)
            if(bycrptSuccess){
                var newUser = new UserModel({
                    "name": name,
                    "email": email,
                    "password": bycrptSuccess,
                })
                const userSave = await newUser.save() 
                if(userSave){
                    res.status(200).send({
                        message: "Signup Successfully"
                    })
                }
                else{
                     res.status(500).send({
                         message: "user create error,"
                    })
                }
            }else{
                res.status(500).send({
                    message: "password bycrpt error"
               })
            }
        }
        else{
            res. status(301).send({
                message: "user already exist"
            })
        }
    }catch(e){
        res.status(500).send({
            message: "db error" + e
        })
    }
})

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).send({ error: "Kindly fill all the fields" });
      } else {
        const login = await UserModel.findOne({ email: email });
        if (login) {
          const passMatch = await bcrypt.varifyHash(password, login.password);  
          if (!passMatch) {
            res.status(400).send({ message: "Invalid User" });
          } else {
              const token = jwt.sign(
                  {
                    id: login._id,
                    email: login.email,
                  },
                  SERVER_SECRET
                );
                res.cookie("jwtoken", token, {
                  expires: new Date(Date.now() + 300000),
                  httpOnly: true,
                });
            res.status(200).send({ message: "Login successfully", data: login });
          }
        } else {
          res.status(400).send({ error: "Invalid data" });
        }
      }
    } catch (err) {
      res.send({ err: "Operations Failed" });
    }
  });

module.exports = router;
