import { useEffect, useState } from 'react'
import { AloModal } from '../../../common/AloModal'

interface Props {
  open: boolean
  supplier: Record<string, unknown>
  setOpen: (open: boolean) => void
}

export function EditSupplierModal({ open, setOpen, supplier }: Props) {
  return (
    <>
      <AloModal open={open} setOpen={setOpen} title="Edtar Proveedor">
        <>
          {JSON.stringify(supplier)}
          <h3>Infoooo</h3>
        </>
      </AloModal>
    </>
  )
}
