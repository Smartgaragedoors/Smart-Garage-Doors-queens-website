
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-blue-900 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
