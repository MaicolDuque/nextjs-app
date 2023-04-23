import { useState } from 'react'
import { IconPlus } from '@tabler/icons-react'

import { AloButton } from '@components/AloButton'
import { AloTableVirtualized } from '@components/AloTableVirtualized'
import AloConfirmationModal from '@components/AloConfirmationModal'
import { useColumnSuppliers } from './hooks/useColumnSuppliers'
import { useDeleteSupplierMutation, useGetSuppliersQuery } from '@store/api/suppliers/suppliersApi'
import { AddEditSupplierModal } from './components/AddEditSupplierModal'

export default function Suppliers() {
  const { data } = useGetSuppliersQuery(undefined)
  const [openSaveModal, setOpenSaveModal] = useState(false)
  const [deleteSupplier] = useDeleteSupplierMutation()
  const {
    columns,
    openEditModal,
    setOpenEditModal,
    openConfirmationModal,
    setOpenConfirmationModal,
    currentSupplier,
  } = useColumnSuppliers(data)

  const handleDeleteProduct = () => {
    deleteSupplier(currentSupplier?.id as number)
    setOpenConfirmationModal(false)
  }

  const onAddNewProduct = () => {
    setOpenSaveModal(true)
  }

  return (
    <>
      {openSaveModal && (
        <AddEditSupplierModal
          open={openSaveModal}
          setOpen={setOpenSaveModal}
          isEditing={false}
        />
      )}

      {openEditModal && (
        <AddEditSupplierModal
          open={openEditModal}
          setOpen={setOpenEditModal}
          product={currentSupplier}
          isEditing={true}
        />
      )}

      {openConfirmationModal && (
        <AloConfirmationModal
          title="Eliminar Producto"
          open={openConfirmationModal}
          setOpen={setOpenConfirmationModal}
          message="¿Estas seguro que deseas eliminar el proveedor?"
          onAccept={handleDeleteProduct}
        />
      )}

      <AloTableVirtualized
        columns={columns}
        data={data ?? []}
        rowHeight={140}
        headerContent={
          <AloButton
            onClick={() => onAddNewProduct()}
            classes="font-semibold text-base flex gap-3"
            text="Agregar proveedor"
            icon={<IconPlus />}
          />
        }
      />
    </>
  )
}
