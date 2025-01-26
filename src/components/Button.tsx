// use children props

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <div>
      <button className="border bg-red-500 px-3 py-1">{children}</button>
    </div>
  );
};

export default Button;
