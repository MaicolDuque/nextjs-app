import { AloTableList } from '@common/AloTableList'
import { AddEditProductModal } from '@modules/products/components/AddEditProductModal'
import { useGetProductsQuery } from '@store/api/products/productsApi'
import {
  IconPencil,
  IconShoppingCartPlus,
  IconTrash,
} from '@tabler/icons-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ProductsPage() {
  const dataHeader: string[] = ['Id', 'Image', 'Title', 'Price', 'Descripcion']
  const actions = [
    { action: 'edit', icon: <IconPencil /> },
    { action: 'delete', icon: <IconTrash /> },
  ]
  const { productsData, isLoading } = useGetProductsQuery(undefined, {
    selectFromResult: ({ data, error, isLoading }) => ({
      productsData: data?.map((product) => {
        const { category, creationAt, updatedAt, images, id,  ...rest } = product
        const image = (
          <Image
            alt={product.title}
            src={product.images[0]}
            width={200}
            height={200}
          ></Image>
        )
        return { id, images: image, ...rest }
      }),
      error,
      isLoading
    }),
  })

  const [openSaveModal, setOpenSaveModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
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
      <AloTableList
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
      />
    </>
  )
}
