import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomevsExpense = () => {
  const { transactions, months, month, year } = useContext(GlobalContext);

  let balance = 0;
  let classSign;

  transactions.forEach((transaction) => {
    console.log(transaction.amount);
    balance += transaction.amount;
  })

  if (balance >= 0){
    classSign = 'plus';
  } else {
    classSign = 'minus'
  };

  const amounts = transactions.filter((transaction) => months[new Date(transaction.date).getMonth()] === month && new Date(transaction.date).getFullYear() === year).map((transaction) => transaction.amount)
  console.log('All Amounts:' + amounts);

  const incomeAmounts = amounts.filter((amount) => amount >= 0);
  const income = incomeAmounts.reduce((acc, current) => {
    return acc += current;
  }, 0)

  const expenseAmounts = amounts.filter((amount) => amount < 0);
  const expense = expenseAmounts.reduce((acc, current) => {
    return acc += current;
  }, 0)

  const eatingOut = transactions.filter((transaction) => transaction.category === "Eating Out").map((transaction) => transaction.amount).reduce((acc, current) => { return acc += current }, 0);
  console.log(eatingOut);


  return(
    <div className = "income-expense-viewer">
      <div className="balance">
        Balance
        <div className={classSign}>${balance}</div>
      </div>
      <div className="income">
        Income 
        <div className="income-amount">${income}</div>
      </div>
      <div className="expense">
        Expense
        <div className="expense-amount">-${Math.abs(expense)}</div>
      </div>
    </div>
  );
};
