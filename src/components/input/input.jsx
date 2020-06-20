import React from 'react';

const Input = ({ label, name, type, value, onChange }) => {
  return (
    <p>
      {label}:
      <input name={name} type={type} value={value} onChange={onChange} />
    </p>
  );
};

export default Input;
