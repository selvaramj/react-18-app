import { useState, useMemo } from 'react';
import * as React from 'react';

interface Props {
  heading: string;
  items: string[];
}
const ListGroup = ({ heading, items }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  console.log('From list-group component');

  //const array = ['New York', 'Sans fransico', 'California', 'London', 'Tokyo'];
  return (
    <>
      <h2>{heading}</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={`list-group-item ${selectedIndex == index && 'active'}`}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(ListGroup);
// Under the hood - with help of babel - JS compiler converts the JSX to react elements
// import React from 'react';

// const ListGroup = () => {
//   return React.createElement(
//     React.Fragment,
//     null,
//     React.createElement('h2', null, 'List Group'),
//     React.createElement(
//       'ul',
//       {
//         className: 'list-group',
//       },
//       React.createElement(
//         'li',
//         {
//           className: 'list-group-item',
//         },
//         'An item',
//       ),
//       React.createElement(
//         'li',
//         {
//           className: 'list-group-item',
//         },
//         'A second item',
//       ),
//       React.createElement(
//         'li',
//         {
//           className: 'list-group-item',
//         },
//         'A third item',
//       ),
//       React.createElement(
//         'li',
//         {
//           className: 'list-group-item',
//         },
//         'A fourth item',
//       ),
//       React.createElement(
//         'li',
//         {
//           className: 'list-group-item',
//         },
//         'And a fifth one',
//       ),
//     ),
//   );
// };
// export default ListGroup;
