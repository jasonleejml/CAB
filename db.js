const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://jasonlee:jasonlee@cab.sfuwn.mongodb.net/transactiontracker?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(mongoURI, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
      });

      console.log(`MongoDB Connection: ${conn.connection.host}`);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
}

module.exports = connectDB;