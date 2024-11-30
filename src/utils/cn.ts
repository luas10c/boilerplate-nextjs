import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export function cn(...inputs: clsx.ClassValue[]) {
  return twMerge(clsx(inputs))
}
