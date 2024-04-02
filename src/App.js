import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(new Date().toJSON().slice(0,10))
  const [desc, setDesc] = useState('')

  const [transactions, setTransactions] = useState([])
  // await?
  const addNewTransaction = (e) => { 
    e.preventDefault()

    try {
      fetch(`${process.env.REACT_APP_API_URL}/add-transaction`,
      {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({name, amount, desc, date})
      }).then((response) => {
        response.json().then(json => {
          setName('')
          setAmount('')
          setDesc('')
          console.log(json)
        })
      })
    } catch (error) {
      console.error(error)
    }
   }
  
  async function getTransactions() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/get-transactions`)
      return response.json()
      
    } catch (error) {
      console.log('Error sending transaction:', error);
    }
  }

  useEffect(() => {
    async function fetchData() {
        try {
            const transactions = await getTransactions();
            setTransactions(transactions);
            console.log(transactions.length);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    }

    fetchData();
}, []);


  let balance = 0
  for (const transaction of transactions) {
    balance += transaction.amount
  }

  balance = balance.toFixed(2)

  return (
    <main>
      <h1>${balance}</h1>
      <form onSubmit={addNewTransaction}>
    
        <div className='basic'>
          <input type='text' placeholder='Name' value = {name} onChange={(e) => setName(e.target.value)}></input>
          <input type='text' placeholder='Amount ($)' value = {amount} onChange={(e) => setAmount(e.target.value)}></input>
          <input type='date' value = {date} onChange={(e) => setDate(e.target.value)}></input>
        </div>
        <div>
          <input type='text' placeholder='Add a Note' value = {desc} onChange={(e) => setDesc(e.target.value)}></input>
        </div>
        <button>Add New Transaction</button>
      </form>
      <div className='transactions'>
        {transactions.length > 0 && transactions.map(transaction => (
          <div className='transaction' key = {transaction._id}>
            <div className='left'>
              <div className='name'>{transaction.name}</div>
              <div className='description'>{transaction.desc}</div>
              </div>
            <div className='right'>
              <div className='pos-price'>{transaction.amount}</div>
              <div className='date'>{transaction.date.slice(0,10)}</div>
            </div>
          </div>
        ))}
        
      </div>
    </main>
  );
}

export default App;
