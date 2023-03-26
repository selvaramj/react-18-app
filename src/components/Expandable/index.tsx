import React, { useState } from 'react';

interface Props {
  children: string;
  maxLength?: number;
}

const Expandable = ({ children, maxLength = 100 }: Props) => {
  const [isExpanded, setExpand] = useState(false);
  if (children.length <= maxLength) return <p>{children}</p>;
  const paragraph = isExpanded ? children : children.substring(0, maxLength);
  const buttonText = isExpanded ? 'Less' : 'More';
  console.log('char length', paragraph.length);
  return (
    <p>
      {paragraph}...
      <button onClick={() => setExpand((prev) => !prev)}>{buttonText}</button>
    </p>
  );
};

export default Expandable;
