'use client'
// FinanceTracker.js
import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';
import { Expense } from './ExpenseList';

import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 2em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;


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
      <StyledHeader>Finance Tracker</StyledHeader>
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
      <AddExpense onAdd={handleAddExpense} />
    </div>
  );
}

