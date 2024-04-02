const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    desc: {type: String, required: false},
    date: {type: Date, required: true}
})

module.exports = model('Transactions', schema)
