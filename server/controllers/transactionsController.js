const transactionsController = {};
const Transaction = require('../models/transactionsModel');


// function: To grab all existing transactions
transactionsController.getTransactions = (req, res, next) => {
    Transaction.find({}, (err, transactions) => {
        if (err) {
            return next('Error in transactionsController.getTransactions: ' + JSON.stringify(err));
        }

        console.log('Get all transactions');
        res.locals.transactions = transactions;
        return next();
    })
};

// function: To add a new transaction
transactionsController.addTransactions = (req, res, next) => {
    const { id, date, payee, category, amount } = req.body;

    // if (!date || !payee || !category || !amount){
    //     return next('Error in transactionsController.addTransactions: Missing information')
    // };

    Transaction.create({ id, date, payee, category, amount })
        .then((transaction) => {
            console.log('Add new transaction');
            res.locals.transaction = transaction;
            return next();
        })
        .catch((err) => {
            return next('Error in transactionsController.addTransactions: ' + err)
        })
};

// function: To delete an existing transaction
transactionsController.deleteTransactions = (req, res, next) => {
    console.log(req.params.id);
    Transaction.findOne({id: req.params.id})
        .then((transaction) => {
            console.log('Delete existing transaction');
            res.locals.transaction = transaction;
            transaction.remove();
            return next();
        })
        .catch((err) => {
            return next('Error in transactionsController.deleteTransactions: The transaction does not exist');
        })

    // res.locals.message = 'Delete existing transaction';
    // return next();
};




module.exports = transactionsController;


