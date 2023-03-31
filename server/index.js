const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")


mongoose.set('strictQuery', true);
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    dbName: "Expensify",
}).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());


app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening to port ${process.env.PORT}`);
});