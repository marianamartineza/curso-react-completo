import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // console.log('+1');
    // value=1000;
    // console.log(value);
    // setCounter(counter + 1);
    setCounter(c => c + 1);
  };

  const handleSubstract = () => setCounter(c => c - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2 data-testid='test-counter'>{counter}</h2>

      <button aria-label='btn+1' onClick={handleAdd}>
        {' '}
        +1{' '}
      </button>
      <button aria-label='btn-1' onClick={handleSubstract}>
        {' '}
        -1{' '}
      </button>
      <button aria-label='btn-reset' onClick={handleReset}>
        {' '}
        reset{' '}
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
