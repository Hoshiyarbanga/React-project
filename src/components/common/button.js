import React from 'react';

const Button = ({ type, children, onClick }) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;