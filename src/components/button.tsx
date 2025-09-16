'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none';

  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-yellow-500 text-white hover:bg-yellow-600 border-2 border-yellow-500',
    secondary: 'bg-transparent text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500/10',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white/10',
  };

  const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const width = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button
      type="button"
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className} group relative overflow-hidden`}
      onMouseEnter={(e) => {
        const hoverEffect = e.currentTarget.querySelector('.hover-effect') as HTMLElement | null;
        if (hoverEffect && variant === 'secondary') {
          hoverEffect.style.transform = 'translateX(0)';
        }
      }}
      onMouseLeave={(e) => {
        const hoverEffect = e.currentTarget.querySelector('.hover-effect') as HTMLElement | null;
        if (hoverEffect && variant === 'secondary') {
          hoverEffect.style.transform = 'translateX(-100%)';
        }
      }}
      {...props}
    >
      {variant === 'secondary' && (
        <span
          className="hover-effect absolute inset-0 -z-10 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-400 transform -translate-x-full transition-transform duration-400"
        />
      )}

      <span
        className={`flex items-center gap-2 ${
          iconPosition === 'right' ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </span>
    </button>
  );
};

export const PlayButton = () => (
  <Button
    variant="secondary"
    size="lg"
    className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] text-base sm:text-lg md:text-xl px-6 py-3 sm:px-8 sm:py-4"
    icon={<ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />}
  >
    Começar Agora
  </Button>
);

export default Button;
