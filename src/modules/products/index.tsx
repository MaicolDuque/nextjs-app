import { useState } from 'react'

import { AloTableVirtualized } from '@components/AloTableVirtualized'
import { AddEditProductModal } from '@modules/products/components/AddEditProductModal'
import { useGetProductsQuery } from '@store/api/products/productsApi'
import { useColumnProducts } from './hooks/useColumnProducts'
import AloConfirmationModal from '@components/AloConfirmationModal'

export default function Products() {
  const { data } = useGetProductsQuery(undefined)
  const [openSaveModal, setOpenSaveModal] = useState(false)
  const {
    columns,
    openEditModal,
    setOpenEditModal,
    openConfirmationModal,
    setOpenConfirmationModal,
    currentProduct,
  } = useColumnProducts(data)

  const handleDeleteProduct = () => {
    console.log('delete user =>', currentProduct)
    setOpenConfirmationModal(false)
  }

  return (
    <>
      {openSaveModal && (
        <AddEditProductModal open={openSaveModal} setOpen={setOpenSaveModal} />
      )}

      {openEditModal && (
        <AddEditProductModal
          open={openEditModal}
          setOpen={setOpenEditModal}
          product={currentProduct}
          isEditing={true}
        />
      )}

      {openConfirmationModal && (
        <AloConfirmationModal
          title="Eliminar Producto"
          open={openConfirmationModal}
          setOpen={setOpenConfirmationModal}
          message="¿Estas seguro que deseas eliminar el producto?"
          onAccept={handleDeleteProduct}
        />
      )}

      <AloTableVirtualized
        columns={columns}
        data={data ?? []}
        rowHeight={140}
      />
    </>
  )
}
