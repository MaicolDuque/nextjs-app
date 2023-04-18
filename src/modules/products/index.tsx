import { useState } from 'react'
import { AloButton } from '@components/AloButton'
import { IconPlus } from '@tabler/icons-react'

import { AloTableVirtualized } from '@components/AloTableVirtualized'
import { AddEditProductModal } from '@modules/products/components/AddEditProductModal'
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from '@store/api/products/productsApi'
import { useColumnProducts } from './hooks/useColumnProducts'
import AloConfirmationModal from '@components/AloConfirmationModal'

export default function Products() {
  const { data } = useGetProductsQuery(undefined)
  const [openSaveModal, setOpenSaveModal] = useState(false)
  const [deleteProduct] = useDeleteProductMutation()
  const {
    columns,
    openEditModal,
    setOpenEditModal,
    openConfirmationModal,
    setOpenConfirmationModal,
    currentProduct,
  } = useColumnProducts(data)

  const handleDeleteProduct = () => {
    deleteProduct(currentProduct?.id as number)
    setOpenConfirmationModal(false)
  }

  const onAddNewProduct = () => {
    console.log('Add product!!')
    setOpenSaveModal(true)
  }

  return (
    <>
      {openSaveModal && (
        <AddEditProductModal open={openSaveModal} setOpen={setOpenSaveModal} isEditing={false} />
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
        headerContent={
          <AloButton
            onClick={() => onAddNewProduct()}
            classes="font-semibold text-base flex gap-3"
            text="Agregar producto"
            icon={<IconPlus />}
          />
        }
      />
    </>
  )
}
