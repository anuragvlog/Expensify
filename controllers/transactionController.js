const Transaction = require("../models/Transaction");

const getAllTransaction = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            userid: req.body.userid,
        });
        res.status(200).json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const deleteTransaction = () => { };

const editTransaction = () => { };

const addTransaction = async (req, res) => {
    try {
        const newTransaction = new Transaction(req.body);
        await newTransaction.save();
        res.status(201).send("Transaction Created");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = { getAllTransaction, addTransaction, editTransaction, deleteTransaction, };