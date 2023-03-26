import React, { ReactNode } from 'react';

interface Props {
  alertMessage: String | ReactNode;
  onCloseHandler: () => void;
}

const Alert = ({ alertMessage, onCloseHandler }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {alertMessage}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onCloseHandler}
      ></button>
    </div>
  );
};

export default Alert;
