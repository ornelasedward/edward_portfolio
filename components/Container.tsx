import React from 'react';

interface containerProps {
  children: React.ReactNode;
  classes?: string;
}

// The page is one framed column: black rules down both sides from md up.
const Container: React.FC<containerProps> = ({ children, classes = '' }) => {
  return (
    <div className={`mx-auto w-full min-w-0 max-w-5xl border-line md:border-x ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
