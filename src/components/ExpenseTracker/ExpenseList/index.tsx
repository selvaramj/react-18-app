import React, { ChangeEvent, useState } from 'react';
// import { z } from 'zod';
// import { useForm } from 'react-hook-form';
import categories from '../categories';
interface expenses {
  description: string;
  amount: number;
  category: string;
  id: number;
}

interface Props {
  expensesList: expenses[];
  deleteExpense: (id: number) => void;
  onSelectCategory: (category: string) => void;
}
const ExpenseList = ({
  expensesList,
  deleteExpense,
  onSelectCategory,
}: Props) => {
  //   const { register, formState } = useForm();
  const expensesFilter = ['All categories', ...categories];

  return (
    <div className="mt-3">
      <select
        className="form-select"
        onChange={(e) => onSelectCategory(e.target.value)}
        // {...register('category', { onChange: onCategoryChange })}
      >
        {expensesFilter.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      {expensesList.length > 0 && (
        <table className="table table-bordered mt-2">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expensesList.map((expense) => (
              <tr>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger "
                    onClick={() => deleteExpense(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td>
                $
                {expensesList.reduce(
                  (prev, cur, index) => prev + cur.amount,
                  0,
                )}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;
