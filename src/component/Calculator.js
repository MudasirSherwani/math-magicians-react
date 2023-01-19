import React, { useState } from 'react';
import calculate from '../logic/calculate';
import KeyButtons from './keys';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const EventHandler = (element) => {
    const KeyVal = element.keyTag;
    const getCalculatedVal = calculate(state, KeyVal);
    setState(getCalculatedVal);
  };

  const { total, operation, next } = state;
  return (
    <div className="calculator-page">
      <div className="heading">
        <h2>Let&apos;s do some math!</h2>
      </div>
      <div className="calculator">
        <div className="display">
          <div className="display-value">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <div className="inputs">
          <KeyButtons onClickOperation={EventHandler} />
        </div>
      </div>
    </div>
  );
};
export default Calculator;
