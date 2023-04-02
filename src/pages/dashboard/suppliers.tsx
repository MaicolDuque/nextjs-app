import { IconPencil, IconTrash, IconUserPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AloTableList } from '@components/AloTableList'
import { useState } from 'react'
import { AddEditSupplierModal } from '@modules/suppliers/components/AddEditSupplierModal'
import { useGetSuppliersQuery } from '@store/api/suppliers/suppliersApi'

export default function Suppliers() {
  const dataHeader: string[] = [
    'Id',
    'Avatar',
    'Nombre',
    'Correo',
    'Rol',
    'Fecha creación',
  ]
  const dataBody: any[] = [
    {
      id: 0,
      name: 'Maicol',
      lastName: 'Maicol',
      edad: 17,
      city: 'Medellín',
      type: 'Cargadores',
    },
    {
      id: 2,
      name: 'Jeffrey',
      lastName: 'Espinel',
      edad: 20,
      city: 'Barranquilla',
      type: 'Cargadores',
    },
    {
      id: 3,
      name: 'Mateo',
      lastName: 'Espinel',
      edad: 20,
      city: 'Barranquilla',
      type: 'Cargadores',
    },
    {
      id: 4,
      name: 'Andres',
      lastName: 'Espinel',
      edad: 20,
      city: 'Barranquilla',
      type: 'Cargadores',
    },
  ]

  const actions = [
    { action: 'edit', icon: <IconPencil /> },
    { action: 'delete', icon: <IconTrash /> },
  ]

  const router = useRouter()
  const [openSaveModal, setOpenSaveModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [supplier, setSupplier] = useState({})
  const { data: suppliersData } = useGetSuppliersQuery(undefined)

  console.log({ suppliersData })
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
        title="Lista de proveedores"
        textButtonCreate={'Agregar proveedor'}
        iconButtonCreate={<IconUserPlus />}
        dataBody={(suppliersData ?? []) as Record<string, unknown>[]}
        dataHeader={dataHeader}
        actions={actions}
        showActions={true}
        withSearch={true}
        searchProperties={['name']}
        onAddNew={() => setOpenSaveModal(true)}
        onClickAction={handleAction}
      />
    </>
  )
}
