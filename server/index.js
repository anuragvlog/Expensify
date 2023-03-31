const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()

const app = express();

mongoose.set('strictQuery', true);
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    dbName: "Expensify",
}).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});

app.use(cors())
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("<h1>Hello from server</h1>")
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening to port ${process.env.PORT}`);
});