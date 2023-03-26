import { useState, useEffect } from 'react';
import { CanceledError } from '../services/api-client';
import userService, { User } from '../services/user-service';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const { request, cancel } = userService.getAll<User>();
    setIsLoading(true);
    request
      .then((res) => res.data)
      .then((data) => {
        console.log('data: ', data);
        setUsers(data);
        setIsLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
    console.log('Data fetch completed', users);

    return () => {
      console.log('From clean-up function');
      cancel();
    };
  }, []);

  return { users, error, isLoading, setIsLoading, setError, setUsers };
};

export default useUsers;
