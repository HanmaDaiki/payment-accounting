import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import cn from 'classnames';

type Props = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'red' | 'blue'
}

export default function MyButton({ children, color = 'blue', ...rest }: Props) {
  return <button {...rest} className={
    cn(
      `rounded text-sm bg-blue-500 p-2 text-white hover:bg-blue-600 focus:bg-blue-700`,
      color === 'red' && 'bg-red-500 hover:bg-red-600 focus:bg-red-700')}>
    {children}
  </button>
}