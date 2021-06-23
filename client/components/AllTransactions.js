import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const AllTransactions = () => {
  const { transactions, months, month, year, getTransactions } = useContext(GlobalContext);

  // let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  useEffect(() => {
    console.log('The useEffect is happening');
    getTransactions();
  }, []);


  return(
    <div className = "transactions-list-container">
      {/* <div className = "list-title">All Transactions</div> */}
      <ul>
        {transactions.filter((transaction) => months[new Date(transaction.date).getMonth()] === month && new Date(transaction.date).getFullYear() === year).map((transaction) => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  );
};

