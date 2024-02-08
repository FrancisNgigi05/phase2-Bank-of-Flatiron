import React, { useEffect, useState } from 'react'

function App() {
	const [transactions, setTransactions] = useState([])

	useEffect(() => {
		fetch("http://localhost:3000/transactions")
			// Converting the data from the server to json format
			.then((response) => response.json())
			.then ((data) => setTransactions(data))
	},[])// No Dependancy since I just want the data to be displayed onece and for all

	// Using map to iterate over the data obtained to display it one by one
	const transactionList = transactions.map((transaction) => {
		return (
			<li> {transaction.date}: {transaction.description}: {transaction.category}:  ${transaction.amount}</li>
		)
	})

	return (
		<ul>
			{ transactionList }
		</ul>
	)
}

export default App
