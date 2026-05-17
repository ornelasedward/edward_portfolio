import React from 'react';

export const PAGE_MAX_WIDTH = 'max-w-7xl';

interface containerProps {
  children: React.ReactNode;
  classes?: string;
}

const Container: React.FC<containerProps> = ({ children, classes }) => {
  return (
    <div
      className={`mx-auto w-full min-w-0 ${PAGE_MAX_WIDTH} max-[280px]:px-2 px-5 sm:px-8 lg:px-12 xl:px-16 ${classes} `}
    >
      {children}
    </div>
  );
};

export default Container;
