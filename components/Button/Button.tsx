import { cva, type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";

const button = cva(
  [
    'justify-center',
    'inline-flex',
    'items-center',
    'rounded-xl',
    'text-center',
    'border-2',
    'border-amber-300',
    'transition-colors',
    'delay-50',
    'cursor-pointer',
    'gap-2.5',
    'font-medium',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-amber-300', 'text-zinc-900', 'hover:enabled:bg-amber-400',
          'disabled:text-gray-500', 'disabled:bg-zinc-800', 'disabled:border-zinc-800',
        ],
        secondary: [
          'bg-transparent', 'text-amber-300', 'hover:enabled:bg-amber-300', 'hover:enabled:text-zinc-900',
          'disabled:text-white', 'disabled:border-gray-500',
        ],
      },
      size: {
        md: ['min-w-20', 'h-full', 'min-h-12', 'text-md', 'py-2', 'px-9'],
        lg: ['min-w-[328px]', 'h-full', 'min-h-14', 'text-lg', 'py-3', 'px-5'],
      },
      underline: { true: ['underline'], false: [] },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  underline?: boolean;
}

export function Button({ className, intent, size, underline, ...props }: ButtonProps) {
  return (
    <button className={twMerge(button({ intent, size, className, underline }))} {...props}>
      {props.children}
    </button>
  );
}
