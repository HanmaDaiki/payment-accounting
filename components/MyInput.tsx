import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function MyInput({ ...rest }: Props) {
  return <input {...rest} className='rounded text-sm p-2' />
}