import { IconPencil, IconTrash, IconUserPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AloTableList } from '@common/AloTableList'
import { useState } from 'react'
import { AddSupplierModal } from '../../../modules/suppliers/components/AddSupplierModal'
import { EditSupplierModal } from '../../../modules/suppliers/components/EditSupplierModal'

export default function Suppliers() {
  const dataHeader: string[] = [
    'Id',
    'Nombre',
    'Apellido',
    'Edad',
    'Ciudad',
    'Tipo',
  ]
  const dataBody: any[] = [
    {
      id: 0,
      name: 'Maicol',
      lastName: (
        <>
          <Image
            alt="text"
            src="https://yt3.googleusercontent.com/qr-eUsJkK-gtUnIeSWMeyBuAI0AYmIAijDD4LK6J7GiLxGRkTwEwSP0NjhVZK_z7NI691EDlmnU=s900-c-k-c0x00ffffff-no-rj"
            width={100}
            height={100}
          ></Image>
        </>
      ),
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

  const handleAction = (action: string, data: Record<string, any>) => {
    if (action === 'edit') {
      setSupplier(data)
      setOpenEditModal(true)
    }
  }

  return (
    <>
      {openSaveModal && (
        <AddSupplierModal open={openSaveModal} setOpen={setOpenSaveModal} />
      )}

      {openEditModal && (
        <EditSupplierModal
          open={openEditModal}
          setOpen={setOpenEditModal}
          supplier={supplier}
        />
      )}
      <AloTableList
        title="Lista de proveedores"
        textButtonCreate={'Agregar proveedor'}
        iconButtonCreate={<IconUserPlus />}
        dataBody={dataBody}
        dataHeader={dataHeader}
        actions={actions}
        showActions={true}
        withSearch={true}
        searchProperty="name"
        onAddNew={() => setOpenSaveModal(true)}
        onClickAction={handleAction}
      />
    </>
  )
}
