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
        'bg-cyan-500 px-4 py-2 rounded-full hover:bg-cyan-400 disabled:bg-cyan-500/80 transition-colors cursor-pointer',
        className
      )}
      {...rest}>
      {children}
    </button>
  )
}
