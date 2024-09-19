import React from 'react';

interface ButtonScoreI {
  backgroundColor?: string;
  color?: string;
  number: number;
  score?: string;
  review?: number;
  onChange?: () => void;
}

const ButtonScore: React.FC<ButtonScoreI> = ({
  backgroundColor = "#4070F4", 
  color = "white",
  number,
  review,
  score,
  ...props
}) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <button
        className="w-10 h-9 rounded-sm border-none"
        style={{ backgroundColor, color }} 
        {...props}
      >
        <span>{number}</span>
      </button>
      <span className="font-medium">{score}</span>
      <span className="font-medium text-gray-500">({review} Reviews)</span>
    </div>
  );
};

export default ButtonScore;
