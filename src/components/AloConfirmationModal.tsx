import { AloButton } from './AloButton'
import { AloModal } from './AloModal'

interface Props {
  open: boolean
  title: string
  message: string
  setOpen: (open: boolean) => void
  onAccept: () => void
}

export default function AloConfirmationModal({
  open,
  setOpen,
  message,
  title,
  onAccept
}: Props) {
  const footer = (
    <>
      <AloButton
        text="Cancelar"
        onClick={(_e) => setOpen(false)}
        type="outline"
      />
      <AloButton text="Aceptar" onClick={() => onAccept()} type="fill" />
    </>
  )
  return (
    <>
      <AloModal title={title} open={open} setOpen={setOpen} footer={footer}>
        {message}
      </AloModal>
    </>
  )
}
