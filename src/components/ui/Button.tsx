import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'rounded-full font-medium transition-all',
        {
          'bg-[#0c4160] text-white hover:bg-[#0c4160]/90': variant === 'primary',
          'bg-white text-[#0c4160] hover:bg-gray-50': variant === 'secondary',
          'border-2 border-[#0c4160] text-[#0c4160] hover:bg-[#0c4160] hover:text-white': variant === 'outline',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;