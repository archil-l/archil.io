import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  role?: string;
  className?: string;
};

const Container = ({ children, className, role }: ContainerProps) => {
  return (
    <div className={`container ${className ? className : ''}`} role={role}>
      {children}
    </div>
  );
};

export default Container;
