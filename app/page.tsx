'use client'
// FinanceTracker.js
import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';
import { Expense } from './ExpenseList';

export default function FinanceTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (newExpense : Expense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id : number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h1>Finance Tracker</h1>
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
      <AddExpense onAdd={handleAddExpense} />
    </div>
  );
}

