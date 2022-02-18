import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js'


const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const balance = amounts.reduce((total, amount) => total += amount, 0).toFixed(2)
    console.log(balance)
    return (
        <>
            <h4>Your balance</h4>
            <h1 id="balance">${balance}</h1>
        </>
    )
}

export default Balance
