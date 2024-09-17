import React, { useState } from 'react';
import { Expense } from './ExpenseList';
import { randomInt } from 'crypto';
interface AddExpenseProps {
    onAdd: (newExpense: Expense) => void;
  }
function AddExpense({ onAdd  } : AddExpenseProps) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    const newExpense: Expense = {
        category,
        amount: Number(amount), // Convert to number
        date: Date(),
        id: Number(Math.random()),
      };
    onAdd(newExpense);
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <br />
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        <br />
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <br />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;