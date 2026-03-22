import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className = '', type = 'button', ...props }: Props) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-[72px] items-center justify-center bg-black px-10 text-[18px] font-bold text-white border-black border-2 border-block transition-colors
        duration-200 hover:bg-white hover:text-black cursor-pointer${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
