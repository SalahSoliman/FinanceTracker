import React, { useState } from 'react';
import { Expense } from './ExpenseList';
import { randomInt } from 'crypto';
import styled from 'styled-components';

const StyledInput = styled.input`
  color: blue;
  // Other styles...
`;

const StyledForm = styled.form`
color: blue
background-color: white
padding: 20px
`;

const StyledHeader = styled.header`
  background-color: blue;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 2em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;



const Button = styled.button`
  padding: 10px;
  border: 2px solid blue;
  border-radius: 4px;
`;

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
      <StyledHeader> Test </StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <label>Amount:</label>
        <StyledInput type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <br />
        <label>Category:</label>
        <StyledInput type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        <br />
        <label>Date:</label>
        <StyledInput type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <br />
        <Button type="submit">Add Expense</Button>
      </StyledForm>
    </div>
  );
}

export default AddExpense;