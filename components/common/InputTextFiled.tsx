// CustomTextField.tsx

import React, { useState, ChangeEvent, FocusEvent } from 'react';

interface CustomTextFieldProps {
  label: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  multiline?: boolean;
  rows?: number;
}
const InputTextField: React.FC<CustomTextFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  multiline = false,
  rows = 1,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputElement = multiline ? (
    <textarea
      className={`border border-gray bg-transparent    px-4 py-2 w-full text-base text-gray ${
        isFocused ? '' : ''
      }`}
      id={label}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      rows={rows}
    />
  ) : (
    <input
      className={`border border-gray bg-transparent    px-4 py-2 w-full text-base text-gray ${
        isFocused ? '' : ''
      }`}
      type={type}
      id={label}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );

  return (
    <div className="relative">
      <label
        className={`absolute bg-primary-dark pointer-events-none left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-100 ${
          isFocused || value
            ? ' text-gray -top-[3px] text-sm font-semibold'
            : ''
        }`}
        htmlFor={label}
      >
        {label}
      </label>
      {inputElement}
    </div>
  );
};

export default InputTextField;
