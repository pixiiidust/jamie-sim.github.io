import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'link';
  as?: 'button' | 'a';
  href?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  as = 'button', 
  href, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider uppercase text-sm px-6 py-4 transition-all active:translate-y-1 border-2 border-black sharp-edges";
  
  const variants = {
    primary: "bg-black text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    outline: "bg-white text-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    link: "bg-transparent border-none hover:underline p-0 text-black justify-start hover:shadow-none active:translate-y-0 text-xs"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={combinedClassName}
      >
        {children} {icon && <span className="ml-2">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children} {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;