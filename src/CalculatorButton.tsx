import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

const CalculatorButton: React.FC<Props> = ({ text, onClick, className = '' }) => {
  return (
    <button
      className={`calculator-button ${className} bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-xl shadow-md transition-all duration-200 active:scale-95`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CalculatorButton;
