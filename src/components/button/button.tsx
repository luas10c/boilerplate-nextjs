import { cn } from '#/utils/cn'

export function Button({
  children,
  className,
  ...rest
}: React.ComponentProps<'button'>) {
  return (
    <button
      type="button"
      className={cn(
        'cursor-pointer rounded-full bg-cyan-500 px-4 py-2 transition-colors hover:bg-cyan-400 disabled:bg-cyan-500/80',
        className
      )}
      {...rest}>
      {children}
    </button>
  )
}
