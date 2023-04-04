const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require('mongoose')

const app = express();

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', true);
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    dbName: 'Expensify',
}).then(() => {
    console.log('DB Connected')
}).catch((error) => {
    console.log(error)
})


//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoutes"));
//transaction routes
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

//listen server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});