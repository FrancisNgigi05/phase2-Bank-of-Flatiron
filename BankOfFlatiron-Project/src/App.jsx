import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import './App.css';



function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const addTransaction = (newTransaction) => {
   
    newTransaction.id = Math.random(); 

    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.includes(searchTerm)
  );

  return (
    <div>
      <h1>Bank Transactions</h1>

      
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <TransactionTable
        transactions={filteredTransactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
