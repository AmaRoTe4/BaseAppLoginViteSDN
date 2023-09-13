import React, { ReactNode } from 'react';
import BtnToMain from '../components/BtnToMain';

interface ParentProps {
  children: ReactNode;
}

export const Layout: React.FC<ParentProps> = ({ children }) => {
  return (
    <div className="px-5 w-screen h-screen flex flex-col overflow-x-hidden pb-20">
      {children}
      <BtnToMain />
    </div>
  );
};