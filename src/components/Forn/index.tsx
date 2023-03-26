import React, { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../Button';

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 charter(s)' }),
  age: z
    .number({ invalid_type_error: 'Age is required' })
    .min(0, { message: 'Age must be greater than 0' }),
});
type FormFields = z.infer<typeof schema>;
// interface FormFields {
//   name: string;
//   age: number;
// }

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });
  console.log('from data ', errors);

  // useState
  //   const [person, setPerson] = useState({ name: '', age: '' });
  // useRef
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: '', age: 0 };
  const onFormSubmitHandler = (data: FieldValues) => {
    console.log('clicked');
    // if (nameRef.current) person.name = nameRef.current.value;
    // if (ageRef.current) person.age = parseInt(ageRef.current.value);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmitHandler)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            {...register('name', {})}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="form-control"
            {...register('age', { valueAsNumber: true })}
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
