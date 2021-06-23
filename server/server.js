const { apply } = require('async');
const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('../db');

const transactionsController = require('./controllers/transactionsController');
const userController = require('./controllers/userController');

connectDB();

app.use(express.json());


// app.get('/', (req, res) => {
//     return res.render('../frontpage.html');
// })

// app.get('/signup', (req, res) => {
//     res.render('../signup.html');
// })

// app.post('/login', userController.verifyUser, (req, res) => {
//     return res.render('../index.js');
// })

app.get('/api/transactions', transactionsController.getTransactions, (req, res) => {
    return res.send(res.locals.transactions)
    // return res.status(200).json({ count: res.locals.transactions.length, transactions: res.locals.transactions });
    // return res.send(res.locals.message);
})

app.post('/api/newTransaction', transactionsController.addTransactions, (req, res) => {
    return res.status(200).json({ transaction: res.locals.transaction });
    // return res.send(res.locals.message);
})

app.delete('/api/deleteTransaction/:id', transactionsController.deleteTransactions, (req, res) => {
    return res.status(200).json({ transaction: res.locals.transaction });
    // return res.send(res.locals.message);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// const leaderList = [
//   { name: 'Anna', id: 'a0' },
//   { name: 'Ben', id: 'b0' },
//   { name: 'Clara', id: 'c0' },
//   { name: 'David', id: 'd0' },
// ];

// app.get('/api/leaders', (req, res) => {
//   res.send(leaderList);
// });

// if (process.env.NODE_ENV === 'production') {
//   // statically serve everything in the build folder on the route '/build'
//   app.use('/build', express.static(path.join(__dirname, '../build')));
//   // serve index.html on the route '/'
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
//   });
// }
// app.listen(3000); //listens on port 3000 -> http://localhost:3000/
