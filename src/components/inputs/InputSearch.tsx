import React from 'react';

interface InputSearchI {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputSearch: React.FC<InputSearchI> = ({
  startIcon,
  endIcon,
  inputValue,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex items-center bg-white rounded-md p-1 border border-gray-300">
      {startIcon && (
        <div className="w-10 h-full flex justify-center items-center">
          <span className="cursor-pointer text-lg">{startIcon}</span>
        </div>
      )}
      <input
        type="text"
        className="flex-grow bg-transparent border-none border-r border-gray-300 p-2 focus:outline-none"
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      {endIcon && (
        <div className="w-10 h-full flex justify-center items-center">
          <span className="cursor-pointer text-lg">{endIcon}</span>
        </div>
      )}
    </div>
  );
};

export default InputSearch;
