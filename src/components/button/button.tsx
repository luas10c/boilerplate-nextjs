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
        'bg-purple-500 px-4 py-2 min-w-[144px] rounded-full hover:bg-purple-400 disabled:bg-purple-500/80 transition-colors cursor-pointer',
        className
      )}
      {...rest}>
      {children}
    </button>
  )
}
