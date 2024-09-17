import React from 'react';


export interface Expense {
  amount: number;
  category: string;
  date: string;
  id: number; // Add an ID property for deletion
}

function ExpenseItem({ expense, onDelete }: { expense: Expense; onDelete: (id: number) => void }) {
  return (
    <li>
      {expense.amount} - {expense.category} - {expense.date}
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </li>
  );
}

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

export default function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
