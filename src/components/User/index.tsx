import useUsers from '../../hooks/useUsers';
import userService, { User } from '../../services/user-service';

const UserComponent = () => {
  const { users, error, isLoading, setUsers, setError, setIsLoading } =
    useUsers();
  const onDeleteHandler = (deletedUser: User) => {
    const originalArray = [...users];
    const updatedUsersList = users.filter((user) => user.id !== deletedUser.id);
    setUsers(updatedUsersList);

    userService
      .delete(deletedUser.id)
      .then((res) => console.log('The response, ', res))
      .catch((e) => {
        console.log('The error ', e);
        setError(e.message);
        setUsers(originalArray);
      });
  };
  function updateHandler(user: User) {
    const updatedUser = { ...user, name: user.name + '!!' };
    setUsers(users.map((usr) => (usr.id === user.id ? updatedUser : usr)));

    userService
      .update(updatedUser)
      .then((res) => console.log(res.data))
      .catch((err) => {
        setError(err.message);
        setUsers(users);
      });
  }
  if (users) {
    console.log('User component render', users.length);
  }
  const addUserHandler = () => {
    const originalArray = [...users];
    const newUser = { id: 0, name: 'selvam' };
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then((res) => {
        console.log('add user response ', res, users);
        setUsers([res.data, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalArray);
      });
  };
  return (
    <div>
      <h3>Users</h3>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary" onClick={addUserHandler}>
        Add user
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <>
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateHandler(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDeleteHandler(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
