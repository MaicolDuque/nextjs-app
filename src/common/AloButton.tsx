interface Props {
  text: string
  type?: 'outline' | 'fill'
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const classByType: Record<string, string> = {
  outline:
    'text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-500 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10',
  fill: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
}

export function AloButton({ text, onClick, type = 'fill' }: Props) {
  return (
    <>
      <button onClick={onClick} type="button" className={classByType[type]}>
        {text}
      </button>
    </>
  )
}
