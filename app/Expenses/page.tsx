"use client";

import { createContext, useState, useContext } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Grid2,
} from "@mui/material";

interface Expense {
  id: number;
  amount: number;
  date: string;
}
interface AddExpenseProps {
  onAdd: (expense: Expense) => void;
}

export function AddExpense({ onAdd }: AddExpenseProps) {
  const [amount, setAmount] = useState<number | "">("");
  const [date, setDate] = useState<string | "">("");
  const [id, setId] = useState<number | "">("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const transaction = {
      id,
      amount,
      date,
    };

    console.log("Transaction Submitted:", transaction);

    // Reset form
    setId("");
    setAmount("");
    setDate("");
    const expense: Expense = {
      id: Math.random(), // Use a unique id
      amount: Number(amount),
      date,
    };
    onAdd(expense);
  };
  return (
    <Container maxWidth="sm" sx={{ bgcolor: "white", padding: 2 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Transaction Form
        </Typography>
        <TextField
          label="ID"
          type="number"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <Grid2
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid2 size={6} sx={{ padding: 2 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid2>
          <Grid2 size={6}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ bgcolor: "red" }}
            >
              Non
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Container>
  );
}

export default function ExpenseList() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense: (expense: Expense) => void = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <AddExpense onAdd={addExpense} />
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.date}: {expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
