import { useState } from 'react'

import { AloTableVirtualized } from '@components/AloTableVirtualized'
import { AddEditProductModal } from '@modules/products/components/AddEditProductModal'
import { useGetProductsQuery } from '@store/api/products/productsApi'
import { useColumnProducts } from './hooks/useColumnProducts'


export default function Products() {
  const { data } = useGetProductsQuery(undefined)
  const { columns, openEditModal, setOpenEditModal } = useColumnProducts(data)
  const [openSaveModal, setOpenSaveModal] = useState(false)
  const [product, setProduct] = useState({})

  const handleAction = (action: string, data: Record<string, any>) => {
    console.log({ data })
    if (action === 'edit') {
      setProduct(data)
      setOpenEditModal(true)
    }
    if (action === 'delete') {
      alert('Delete User: ' + data.id)
    }
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
          product={product}
          isEditing={true}
        />
      )}
      <AloTableVirtualized columns={columns} data={data ?? []} />
      {/* <AloTableList
        title="Lista de Productos"
        textButtonCreate={'Agregar producto'}
        iconButtonCreate={<IconShoppingCartPlus />}
        dataBody={productsData ?? []}
        dataHeader={dataHeader}
        actions={actions}
        showActions={true}
        withSearch={true}
        searchProperties={["title", 'description']}
        onAddNew={() => setOpenSaveModal(true)}
        onClickAction={handleAction}
      /> */}
    </>
  )
}
