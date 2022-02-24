import React from 'react';

// import PropTypes from 'prop-types';
// import s from './filter.module.css'


const Filter = ({value, onChange}) => (
 <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
