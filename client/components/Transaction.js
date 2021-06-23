import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);

    let sign;
    let classSign;
    let image;

    if (props.transaction.amount >= 0){
        classSign = 'plus';
    } else {
        sign = '-';
        classSign = 'minus'
    };

    if (props.transaction.category === 'Income') {
      image = "https://img.icons8.com/dusk/64/000000/money-box.png";
    } else if (props.transaction.category === 'Eating Out') {
      image = "https://img.icons8.com/dusk/64/000000/hamburger.png";
    } else if (props.transaction.category === 'Groceries') {
      image = "https://img.icons8.com/dusk/64/000000/vegetarian-food.png";
    } else if (props.transaction.category === 'Rent') {
      image = "https://img.icons8.com/dusk/64/000000/home.png";
    } else if (props.transaction.category === 'Bills') {
      image = "https://img.icons8.com/dusk/64/000000/price-tag.png";
    } else if (props.transaction.category === 'Car') {
      image = "https://img.icons8.com/dusk/64/000000/sedan.png";
    } else if (props.transaction.category === 'Shopping') {
      image = "https://img.icons8.com/dusk/64/000000/shopping-cart-loaded.png";
    } else if (props.transaction.category === 'Entertainment') {
      image = "https://img.icons8.com/dusk/64/000000/theme-park.png";
    } else if (props.transaction.category === 'Gift') {
      image = "https://img.icons8.com/dusk/64/000000/gift.png";
    }

    return (
      <div className='transaction'>
        <li className={classSign}>
          <img src={image}/>
          <div className='payee'>{props.transaction.payee}<br></br>
            <div className='date'>{props.transaction.date}</div>
          </div>
          <div className={classSign}>{sign}${Math.abs(props.transaction.amount)}</div>
          <button className="edit-button">Edit</button>
          <button className="delete-button" onClick={() => deleteTransaction(props.transaction.id)}>x</button>
        </li>  
      </div>
    )
}