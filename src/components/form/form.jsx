import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type='submit' value='Submit'>
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
