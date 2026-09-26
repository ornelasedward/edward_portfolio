import React, { ChangeEvent } from 'react';

interface CustomTextFieldProps {
  label: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  rows?: number;
}

const fieldClasses =
  'w-full border border-line bg-paper px-3 py-2 text-base text-ink outline-none transition-shadow focus:shadow-[3px_3px_0_0_#0a0a0a]';

const InputTextField: React.FC<CustomTextFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  multiline = false,
  rows = 1,
}) => {
  return (
    <div>
      <label className="label mb-1.5 block" htmlFor={label}>
        {label}
      </label>
      {multiline ? (
        <textarea className={fieldClasses} id={label} value={value} onChange={onChange} rows={rows} required />
      ) : (
        <input className={fieldClasses} type={type} id={label} value={value} onChange={onChange} required />
      )}
    </div>
  );
};

export default InputTextField;
