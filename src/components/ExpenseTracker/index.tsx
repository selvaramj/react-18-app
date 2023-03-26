import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

interface expenses {
  description: string;
  amount: number;
  category: string;
  id: number;
}
interface newExpense {
  description: string;
  amount: number;
  category: string;
}

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<expenses[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const expensesCategory = ['Groceries', 'Utilities', 'Entertainment'];
  const visibleExpenses =
    selectedCategory && selectedCategory != 'All categories'
      ? expenses.filter((expense) => expense.category == selectedCategory)
      : expenses;
  const addExpenseHandler = (data) => {
    data.id = new Date().getTime();
    setExpenses((prev) => [...prev, data]);
  };
  const deleteExpenseHandler = (id: number) => {
    const updatedExpenses = expenses.filter((expense) => expense.id != id);
    setExpenses(updatedExpenses);
  };
  return (
    <div>
      <h2>Expenses Tracker</h2>
      <ExpenseForm addExpense={addExpenseHandler} />
      <ExpenseList
        expensesList={visibleExpenses}
        deleteExpense={deleteExpenseHandler}
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
    </div>
  );
};

export default ExpenseTracker;
