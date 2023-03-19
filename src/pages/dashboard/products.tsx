import { AloTableList } from '@common/AloTableList'
import { AddEditSupplierModal } from '@modules/suppliers/components/AddEditSupplierModal'
import { useGetProductsQuery } from '@store/api/products/productsApi'
import {
  IconPencil,
  IconShoppingCartPlus,
  IconTrash,
} from '@tabler/icons-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Products() {
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
  const [supplier, setSupplier] = useState({})

  const handleAction = (action: string, data: Record<string, any>) => {
    console.log({ data })
    if (action === 'edit') {
      setSupplier(data)
      setOpenEditModal(true)
    }
    if (action === 'delete') {
      alert('Delete User: ' + data.id)
    }
  }

  return (
    <>
      {openSaveModal && (
        <AddEditSupplierModal open={openSaveModal} setOpen={setOpenSaveModal} />
      )}

      {openEditModal && (
        <AddEditSupplierModal
          open={openEditModal}
          setOpen={setOpenEditModal}
          supplier={supplier}
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
        searchProperty="title"
        onAddNew={() => setOpenSaveModal(true)}
        onClickAction={handleAction}
      />
    </>
  )
}
