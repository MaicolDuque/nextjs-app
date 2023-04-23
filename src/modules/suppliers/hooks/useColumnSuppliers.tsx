import { useMemo, useState } from 'react'

import { Supplier } from '@store/api/types/Supplier'
import { IconPencil, IconTrash } from '@tabler/icons-react'
import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper<Supplier>()

export function useColumnSuppliers(data: Supplier[] | undefined) {
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
  const [currentSupplier, setCurrentSupplier] = useState<Supplier | undefined>()

  const handleEdit = (id: string | number) => {
    const currentSupplier = data?.find(supplier => supplier.id === id) as Supplier
    console.log('Ediitt ', id, currentSupplier)
    setCurrentSupplier(currentSupplier)
    setOpenEditModal(true)
  }

  const handleDelete = (id: string | number) => {
    const currentSupplier = data?.find(supplier => supplier.id === id) as Supplier
    setCurrentSupplier(currentSupplier)
    setOpenConfirmationModal(true)
  }

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        cell: (value) => value.renderValue(),
      }),
      columnHelper.accessor('name', {
        header: () => 'Nombre',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('email', {
        header: () => 'Correo',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('role', {
        header: () => 'Rol',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('id', {
        id: 'id2',
        enableSorting: false,
        cell: (value) => (
          <div className="flex gap-1">
            <IconPencil
              className="cursor-pointer"
              onClick={() => handleEdit(value.row.original.id)}
            />
            <IconTrash
              className="cursor-pointer"
              onClick={() => handleDelete(value.row.original.id)}
            />
          </div>
        ),
        header: () => 'Acciones',
      }),
    ],
    [data]
  )

  return {
    columns,
    openEditModal,
    setOpenEditModal,
    openConfirmationModal,
    setOpenConfirmationModal,
    currentSupplier
  }
}
