interface Props {
  text: string
  type?: 'outline' | 'fill'
  disabled?: boolean
  icon?: React.ReactNode
  classes?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const classByType: Record<string, string> = {
  outline:
    'text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-500 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10',
  fill: 'text-white bg-alo-primary hover:opacity-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ',
}

export function AloButton({
  text,
  icon,
  classes = '',
  onClick,
  type = 'fill',
  disabled = false,
}: Props) {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        type="button"
        className={`${classByType[type]} ${disabled ? ' pointer-events-none opacity-80' : ''} ${classes}`}
      >
        {icon}
        {text}
      </button>
    </>
  )
}
