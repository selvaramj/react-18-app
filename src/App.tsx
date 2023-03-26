import { useState, useMemo, ReactNode } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ListGroup from './components/ListGroup/ListGroup';
import Button from './components/Button';
import Alert from './components/Alert';
import Like from './components/Like';
import Dummy from './Dummy';
import Expandable from './components/Expandable';
import Form from './components/Forn';
import ExpenseTracker from './components/ExpenseTracker';
import User from './components/User';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

const cities = [
  'New York',
  'Sans fransico',
  'California',
  'London',
  'Tokyo',
].sort();
let outerBug = [];
function App() {
  const [count, setCount] = useState(0);
  const [alertToggle, setAlertToggle] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [cities, setCities] = useState([
    'New York',
    'Sans fransico',
    'California',
    'London',
    'Tokyo',
  ]);
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: 'Bug-1',
      fixed: false,
    },
    {
      id: 2,
      title: 'Bug-2',
      fixed: false,
    },
  ]);
  const onLikeHandler = () => setIsLiked((prevState) => !prevState);
  const onBugClickHandler = (bugId: number) => {
    setBugs((prevState) =>
      prevState.map((bug) =>
        bug.id == bugId ? { ...bug, fixed: !bug.fixed } : bug,
      ),
    );
    outerBug = bugs;
  };
  const data = <h1>Hello World</h1>;
  console.log('App Component');

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/users" element={<User />}></Route>
        <Route path="/expense-tracker" element={<ExpenseTracker />}></Route>
        <Route
          path="/expandable"
          element={
            <Expandable>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Expandable>
          }
        ></Route>
        <Route path="*" element={<User />} />
      </Routes>
      {/* <Form />
      {!!alertToggle && (
        <Alert
          alertMessage="Hey, You clicked the button, Thats why i am appearing"
          onCloseHandler={() => setAlertToggle(false)}
        />
      )}
      <ListGroup heading="Cities" items={cities} />
      <Button name="Click" onClickHandler={() => setAlertToggle(true)} />
      <Like isLiked={isLiked} onLikeHandler={onLikeHandler} />
      {useMemo(Dummy, [])}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action change</th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug) => (
            <tr>
              <td>{bug.id}</td>
              <td>{bug.title}</td>
              <td>{bug.fixed ? 'Fixed' : 'Not fixed'}</td>
              <td>
                <button onClick={() => onBugClickHandler(bug.id)}>
                  Change the status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      */}
    </div>
  );
}

export default App;
