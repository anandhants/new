import React from 'react';
import './tailwind.css';
import { ButtonProps } from './interfaces';

export const Button = ({
  onClick,backgroundColor,label,textColor,hoverBg,disabled,style,autoFocus,className,
  ...props
}: ButtonProps) => {
  
  return (
    <button
    type="button"
    className={[`${backgroundColor}`,`${hoverBg}`,`${textColor}`,`${className}`].join(' ')}
    {...props}
    disabled={disabled}
    onClick={onClick}
    style={style}
    autoFocus={autoFocus}
    role="button"
  >
    {label}
  </button>
  );
};
