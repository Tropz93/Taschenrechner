import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import CalculatorButton from './CalculatorButton';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);

  const handleNumberClick = (number: string) => {
    if (displayValue === '0') {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperatorClick = (operatorValue: string) => {
    setOperator(operatorValue);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqualClick = () => {
    if (operator && firstValue) {
      const num1 = parseFloat(firstValue);
      const num2 = parseFloat(displayValue);
      let result = 0;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            alert("Division by zero is not allowed!");
            return;
          }
          result = num1 / num2;
          break;
        default:
          return;
      }

      setDisplayValue(result.toString());
      setOperator(null);
      setFirstValue(null);
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="calculator bg-gray-800 rounded-3xl shadow-2xl p-8">
        <div className="display text-white text-4xl font-bold mb-4 text-right p-4 bg-gray-700 rounded-2xl min-h-[50px]">
          {displayValue}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <CalculatorButton text="7" onClick={() => handleNumberClick('7')} />
          <CalculatorButton text="8" onClick={() => handleNumberClick('8')} />
          <CalculatorButton text="9" onClick={() => handleNumberClick('9')} />
          <CalculatorButton text="/" onClick={() => handleOperatorClick('/')} className="operator" />

          <CalculatorButton text="4" onClick={() => handleNumberClick('4')} />
          <CalculatorButton text="5" onClick={() => handleNumberClick('5')} />
          <CalculatorButton text="6" onClick={() => handleNumberClick('6')} />
          <CalculatorButton text="*" onClick={() => handleOperatorClick('*')} className="operator" />

          <CalculatorButton text="1" onClick={() => handleNumberClick('1')} />
          <CalculatorButton text="2" onClick={() => handleNumberClick('2')} />
          <CalculatorButton text="3" onClick={() => handleNumberClick('3')} />
          <CalculatorButton text="-" onClick={() => handleOperatorClick('-')} className="operator" />

          <CalculatorButton text="0" onClick={() => handleNumberClick('0')} className="col-span-2" />
          <CalculatorButton text="." onClick={() => handleNumberClick('.')} />
          <CalculatorButton text="+" onClick={() => handleOperatorClick('+')} className="operator" />

          <CalculatorButton text="C" onClick={handleClearClick} className="clear" />
          <CalculatorButton text="=" onClick={handleEqualClick} className="equals col-span-3" />
        </div>
      </div>
    </div>
  );
}

export default App;
