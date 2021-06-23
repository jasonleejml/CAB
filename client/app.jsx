import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from 'react-dom';
import fetch from 'isomorphic-fetch';
import './style.css';
import { Header } from './components/Header';
import { Date } from './components/Date';
import { IncomevsExpense } from './components/IncomevsExpense';
import { ExpenseReport } from './components/ExpenseReport';
import { AllTransactions } from './components/AllTransactions';
import { NewTransaction } from './components/NewTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <div className = "top-navbar">
          <Date />
          <IncomevsExpense />
          <ExpenseReport />
        </div>
          <AllTransactions />
          <NewTransaction />
      </div>
    </GlobalProvider>
  )
}


export default App;