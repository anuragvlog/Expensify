const User = require("../models/User");
const express = require("express")
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const router = express.Router()
const bcrypt = require('bcryptjs')
router.use(bodyParser.json())

//Register Callback
const registerController = async (req, res) => {
  const { name, email, password } = req.body
  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please add all the fields" })
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "User already exists with that email" })
      }
      bcrypt.hash(password, 12)
        .then(hashedpassword => {
          const user = new User({
            name,
            email,
            password: hashedpassword
          })

          user.save()
            .then(user => {
              res.json({ message: "Saved Successfully" })
            })
            .catch(err => {
              console.log(err)
            })
        })

    })
    .catch(err => {
      console.log(err)
    })
};

// login callback
const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please add both email and password" });
  }
  User.findOne({ email: email })
    .then(saveduser => {
      if (!saveduser) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
      bcrypt.compare(password, saveduser.password)
        .then(doMatch => {
          if (doMatch) {
            // res.json("Sucessfully logged in");
            const token = jwt.sign({ _id: saveduser._id }, process.env.JWT_SEC); //saving user id to _id 
            const { _id, name, email } = saveduser
            res.json({ token, user: { _id, name, email } });
          }
          else {
            return res.status(422).json({ error: "Invalid email or password" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    });
};


module.exports = { loginController, registerController };