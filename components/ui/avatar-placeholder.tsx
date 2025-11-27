import { User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AvatarPlaceholderProps {
  size?: 'sm' | 'md' | 'lg';
  initials?: string;
  className?: string;
}

const sizes = {
  sm: 'h-16 w-16 text-lg',
  md: 'h-24 w-24 text-2xl',
  lg: 'h-32 w-32 text-3xl',
};

const iconSizes = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
};

export function AvatarPlaceholder({
  size = 'md',
  initials,
  className,
}: AvatarPlaceholderProps) {
  return (
    <div
      className={cn(
        sizes[size],
        'rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800',
        'flex items-center justify-center border-2 border-slate-200 dark:border-slate-600',
        className
      )}
    >
      {initials ? (
        <span className="font-serif text-slate-400 dark:text-slate-500 font-medium">
          {initials}
        </span>
      ) : (
        <User className={cn(iconSizes[size], 'text-slate-300 dark:text-slate-500')} />
      )}
    </div>
  );
}
