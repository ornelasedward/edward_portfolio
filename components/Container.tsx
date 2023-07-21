import React from 'react';

interface containerProps {
  children: React.ReactNode;
  classes?: string;
}

const Container: React.FC<containerProps> = ({ children, classes }) => {
  return (
    <div
      className={`max-w-[1288px] max-[280px]:px-2 md:px-5 lg:px-5 xl:px-10  px-7 mx-auto ${classes} `}
    >
      {children}
    </div>
  );
};

export default Container;
