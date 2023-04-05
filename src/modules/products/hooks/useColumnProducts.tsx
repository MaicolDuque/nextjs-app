import { useMemo, useState } from 'react'
import Image from 'next/image'

import { Product } from '@store/api/types/Product'
import { IconPencil, IconTrash } from '@tabler/icons-react'
import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper<Product>()

export function useColumnProducts(data: Product[] | undefined) {
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
  const [currentProduct, setCurrentProduct] = useState<Product | undefined>()

  const handleEdit = (id: string | number) => {
    const currentProduct = data?.find(product => product.id === id) as Product
    console.log('Ediitt ', id)
    setCurrentProduct(currentProduct)
    setOpenEditModal(true)
  }

  const handleDelete = (id: string | number) => {
    const currentProduct = data?.find(product => product.id === id) as Product
    setCurrentProduct(currentProduct)
    setOpenConfirmationModal(true)
  }

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        cell: (value) => value.renderValue(),
      }),
      columnHelper.accessor('images', {
        enableSorting: false,
        header: () => 'Imagen',
        cell: (data) => (
          <Image
            alt={data.row.original.title}
            src={data.row.original.images[0]}
            width={200}
            height={200}
          ></Image>
        ),
      }),
      columnHelper.accessor('title', {
        header: () => 'Título',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('price', {
        header: () => 'Precio',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('description', {
        header: () => 'Descripción',
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
    currentProduct
  }
}
