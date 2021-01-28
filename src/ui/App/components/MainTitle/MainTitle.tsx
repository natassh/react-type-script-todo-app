import React from 'react';
import './MainTitle.css';

const MainTitle: React.FC<MainTitleProps> = ({ className = "", children }) => (
  <h1 className={className}>{children}</h1>
);

export default MainTitle;

type MainTitleProps = {
  className?: string,
  children: React.ReactNode
}