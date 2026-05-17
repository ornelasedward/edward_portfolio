'use client';

import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  name: string;
  icon?: React.ReactNode | string;
  type?: 'primary' | 'secondary' | 'outline';
  link?: string;
  target?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  icon,
  type = 'primary',
  link,
  target,
  onClick,
}) => {
  const buttonClasses = `px-5 font-medium inline-flex flex-wrap items-center py-1.5 ${
    type === 'primary'
      ? 'bg-transparent border border-primary text-white hover:bg-primary hover:text-black transition duration-300 ease-in-out'
      : type === 'secondary'
        ? 'bg-transparent border border-dark text-dark hover:bg-[rgba(171, 178, 191, 1)] hover:text-gray transition duration-300 ease-in-out'
        : 'bg-transparent border-none text-primary px-0'
  }`;

  if (link) {
    const href = link.startsWith('/') || link.startsWith('http') ? link : `/${link}`;

    return (
      <Link
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={buttonClasses}
        onClick={onClick}
      >
        {name} {icon && <span className="mr-2">{icon}</span>}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses} type="button">
      {name} {icon && <span className="mr-2">{icon}</span>}
    </button>
  );
};

export default Button;
