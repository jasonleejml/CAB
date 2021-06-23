import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ExpenseReport = () => {
  const { transactions, months, month, year } = useContext(GlobalContext);

  const eatingOut = transactions.filter((transaction) => months[new Date(transaction.date).getMonth()] === month && new Date(transaction.date).getFullYear() === year).filter((transaction) => transaction.category === "Eating Out").map((transaction) => transaction.amount).reduce((acc, current) => { return acc += current }, 0);
  const groceries = transactions.filter((transaction) => months[new Date(transaction.date).getMonth()] === month && new Date(transaction.date).getFullYear() === year).filter((transaction) => transaction.category === "Groceries").map((transaction) => transaction.amount).reduce((acc, current) => { return acc += current }, 0);
  const rent = transactions.filter((transaction) => months[new Date(transaction.date).getMonth()] === month && new Date(transaction.date).getFullYear() === year).filter((transaction) => transaction.category === "Rent").map((transaction) => transaction.amount).reduce((acc, current) => { return acc += current }, 0);
  const bills = transactions.filter((transaction) => months[new Date(transaction.date).getMonth()] === month && new Date(transaction.date).getFullYear() === year).filter((transaction) => transaction.category === "Bills").map((transaction) => transaction.amount).reduce((acc, current) => { return acc += current }, 0);
  const car = transactions.filter((transaction) => months[new Date(transaction.date).getMonth()] === month && new Date(transaction.date).getFullYear() === year).filter((transaction) => transaction.category === "Car").map((transaction) => transaction.amount).reduce((acc, current) => { return acc += current }, 0);
  const shopping = transactions.filter((transaction) => months[new Date(transaction.date).getMonth()] === month && new Date(transaction.date).getFullYear() === year).filter((transaction) => transaction.category === "Shopping").map((transaction) => transaction.amount).reduce((acc, current) => { return acc += current }, 0);
  const entertainment = transactions.filter((transaction) => months[new Date(transaction.date).getMonth()] === month && new Date(transaction.date).getFullYear() === year).filter((transaction) => transaction.category === "Entertainment").map((transaction) => transaction.amount).reduce((acc, current) => { return acc += current }, 0);
  const gift = transactions.filter((transaction) => months[new Date(transaction.date).getMonth()] === month && new Date(transaction.date).getFullYear() === year).filter((transaction) => transaction.category === "Gift").map((transaction) => transaction.amount).reduce((acc, current) => { return acc += current }, 0);

  

  return(
    <div className = "expense-report">
        <div className="expense-report-title">Spending By Category</div>
        <div className='specific-expense'>
            <div className="expense-title">Eating Out</div>
            <div className='specific-category-amount'>${Math.abs(eatingOut)}</div>
        </div>
        <div className='specific-expense'>
            <div className="expense-title">Groceries</div>
            <div className='specific-category-amount'>${Math.abs(groceries)}</div>
        </div>
        <div className='specific-expense'>
            <div className="expense-title">Rent</div>
            <div className='specific-category-amount'>${Math.abs(rent)}</div>
        </div>
        <div className='specific-expense'>
            <div className="expense-title">Bills</div>
            <div className='specific-category-amount'>${Math.abs(bills)}</div>
        </div>
        <div className='specific-expense'>
            <div className="expense-title">Car</div>
            <div className='specific-category-amount'>${Math.abs(car)}</div>
        </div>
        <div className='specific-expense'>
            <div className="expense-title">Shopping</div>
            <div className='specific-category-amount'>${Math.abs(shopping)}</div>
        </div>
        <div className='specific-expense'>
            <div className="expense-title">Entertainment</div>
            <div className='specific-category-amount'>${Math.abs(entertainment)}</div>
        </div>
        <div className='specific-expense'>
            <div className="expense-title">Gift</div>
            <div className='specific-category-amount'>${Math.abs(gift)}</div>   
        </div>
    </div>
  );
};
