import React from 'react';

const Dummy = () => {
  let count = 0;
  console.log('From Dummy Component', count);
  return (
    <div>
      <div>Dummy</div>
      <code>{count}</code>
      <button onClick={() => ++count}>Increment</button>
    </div>
  );
};

export default Dummy;
