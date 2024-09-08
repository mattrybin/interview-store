import { ReactNode, MouseEvent } from "react"

interface ButtonProps {
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="p-2 px-4 bg-slate-700 hover:bg-slate-600 rounded flex place-items-center gap-1"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
