import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  name: string;
  icon?: React.ReactNode | string;
  type?: 'primary' | 'secondary' | 'outline'; // Corrected typo here
  link?: string;
  target?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  icon,
  type = 'primary',
  link,
  target,
  onClick,
}) => {
  const buttonClasses = `px-5 font-medium flex flex-wrap items-center py-1.5 ${
    type === 'primary'
      ? 'bg-transparent border border-primary text-white hover:bg-primary hover:text-black transition duration-300 ease-in-out'
      : type === 'secondary'
      ? 'bg-transparent border border-dark text-dark hover:bg-[rgba(171, 178, 191, 1)] hover:text-gray transition duration-300 ease-in-out'
      : 'bg-transparent border-none text-white px-0' // Outline style when type is not provided or 'outline'
  }`;

  return (
    <Link target={target} href={link || '/'} passHref>
      <button onClick={onClick} className={buttonClasses}>
        {name} {icon && <span className="mr-2">{icon}</span>}
      </button>
    </Link>
  );
};

export default Button;
