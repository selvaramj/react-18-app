import React from 'react';
import styles from './button.module.css'; // module - while bundling the project, vite create unique classes to inidividual css module. so, no more class clashes
import styled from 'styled-components';

interface Props {
  color?: string;
  onClickHandler: () => void;
  name: string;
}

const Button = ({ color = 'primary', onClickHandler, name }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-${color} ${styles.buttonWrapper}`}
      onClick={onClickHandler}
    >
      {name}
    </button>
  );
};

export default Button;
