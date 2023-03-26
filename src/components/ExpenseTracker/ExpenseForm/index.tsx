import { Schema, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FieldValues } from 'react-hook-form';
import categories from '../categories';
const schema = z.object({
  description: z
    .string()
    .min(3, 'Description should be at least 3 character(s)'),
  amount: z
    .number({ invalid_type_error: 'Amount is required.' })
    .min(0, { message: 'Amount must be greater than or equal to 0.' }),
  category: z.string().min(1, { message: 'Category is required.' }),
});

type FormFields = z.infer<typeof schema>;
interface Props {
  addExpense: (data: FormFields) => void;
}

const ExpenseForm = ({ addExpense }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const onSubmitHandler = (data: FormFields) => {
    addExpense(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit((data) => onSubmitHandler(data))}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          id="description"
          className="form-control"
          {...register('description')}
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="form-control"
          {...register('amount', { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          aria-label="category"
          {...register('category')}
        >
          <option value=""></option>
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
