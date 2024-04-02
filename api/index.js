require('dotenv').config()
const express = require('express')
const cors = require('cors')

const Transaction = require('./models/transaction');
const mongoose = require('mongoose');
const transaction = require('./models/transaction');

const app = express();
app.use(cors())
app.use(express.json())

app.get('/api/test', (req, res) => {
    return res.json({success: true})
})

app.post('/api/add-transaction', async (req, res) => {
    try {
            //console.log(process.env.MONGO_URL)
        await mongoose.connect(process.env.REACT_APP_MONGO_URL)
        const {name, desc, date, amount} = req.body
        const transaction = await Transaction.create({name, desc, date, amount})
        res.json(transaction)
        
    } catch (error) {
        console.log(error)
    }


    //console.log(req.body)
    

})

app.get('/api/get-transactions', async (req, res) => {
    try {
        await mongoose.connect(process.env.REACT_APP_MONGO_URL)
        const transactions = await Transaction.find()
        res.json(transactions)
        
    } catch (error) {
        console.error(error)
    }
})

app.listen(3001)