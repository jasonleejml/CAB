import React, { createContext, useReducer, useEffect, useState } from 'react';
import AppReducer from './AppReducer';

// Initial State

const initialState = {
    transactions: [],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    month: 'December',
    year: 2020
}

// Create context

export const GlobalContext = createContext(initialState);


// Provider component
export const GlobalProvider = ({ children }) => {
     
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function getTransactions() {
        console.log('At function getTransactions');
        fetch('/api/transactions')
        .then((response) => response.json())
        .then((transactions) => dispatch({
            type: "GET_TRANSACTION",
            payload: transactions
        }))
    }

    function deleteTransaction(id) {
        console.log('Used function deleteTransaction');
        console.log('The deleted id is' + id);
        fetch(`/api/deleteTransaction/${id}`, {
            method: "DELETE"
        })

        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction) {
        console.log('Used function addTransaction');
        fetch('/api/newTransaction', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(transaction),
        })


        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    function updateDate(date) {
        console.log('Updated date');

        dispatch({
            type: "UPDATE_DATE",
            payload: date
        })
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        months: state.months,
        month: state.month,
        year: state.year,
        deleteTransaction,
        addTransaction,
        getTransactions,
        updateDate
    }}>
        {children}
    </GlobalContext.Provider>);
}