const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const transactionSchema = new Schema({
    id: { type: Number },
    date: { type: String, required: true },
    payee: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: [true, 'Please state a positive or negative number'] },
})

module.exports = mongoose.model('Transaction', transactionSchema);