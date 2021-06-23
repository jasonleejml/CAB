import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const NewTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [date, setDate] = useState('');
  const [payee, setPayee] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  
  const onSubmit = event => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      date: new Date(date).toDateString(),
      payee,
      category,
      amount: parseInt(amount)
    }
    
    console.log(newTransaction);

    addTransaction(newTransaction);
  }

  return (
    <div className="new-transaction-container">
      <h3>Add Transaction</h3>
      
        <form onSubmit={onSubmit}>
          <div className="input-portion">
            <div className="form-control">
              <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </div>
            
            <div className="form-control">
              <input type="text" value={payee} onChange={(event) => setPayee(event.target.value)} placeholder="Enter Payee..." />
            </div>
            
            <div className="form-control">
              <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Amount..." />
            </div>
          </div>
          
          <div className="form-control">
            <label htmlFor="category">Category: </label>
            <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Select Category Below" readOnly/>
          </div>
      
        <button className="btn-new-transaction">Submit</button>
        </form>
      

      <div className='category-choices'>
        <div className='category-choice' onClick={() => setCategory('Income')}>
          <img src="https://img.icons8.com/dusk/64/000000/money-box.png"/><br></br>Income
        </div>

        <div className='category-choice' onClick={() => setCategory('Eating Out')}>
          <img src="https://img.icons8.com/dusk/64/000000/hamburger.png"/><br></br>Eating Out
        </div>

        <div className='category-choice' onClick={() => setCategory('Groceries')}>
          <img src="https://img.icons8.com/dusk/64/000000/vegetarian-food.png"/><br></br>Groceries
        </div>
   
        <div className='category-choice' onClick={() => setCategory('Rent')}>
          <img src="https://img.icons8.com/dusk/64/000000/home.png"/><br></br>Rent
        </div>

        <div className='category-choice' onClick={() => setCategory('Bills')}>
          <img src="https://img.icons8.com/dusk/64/000000/price-tag.png"/><br></br>Bills
        </div>

        <div className='category-choice' onClick={() => setCategory('Car')}>
          <img src="https://img.icons8.com/dusk/64/000000/sedan.png"/><br></br>Car
        </div>
        
        <div className='category-choice' onClick={() => setCategory('Shopping')}>
          <img src="https://img.icons8.com/dusk/64/000000/shopping-cart-loaded.png"/><br></br>Shopping
        </div>
        
        <div className='category-choice' onClick={() => setCategory('Entertainment')}>
          <img src="https://img.icons8.com/dusk/64/000000/theme-park.png"/><br></br>Entertainment
        </div>   

        <div className='category-choice' onClick={() => setCategory('Gift')}>
          <img src="https://img.icons8.com/dusk/64/000000/gift.png"/><br></br>Gift
        </div>
      </div>
    </div>
  )
}