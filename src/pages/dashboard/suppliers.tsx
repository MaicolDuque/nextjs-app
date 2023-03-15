import { IconPencil, IconTrash, IconUserPlus } from '@tabler/icons-react'
import { useState } from 'react'
import { AloModal } from '../../common/AloModal'
import { AloTableList } from '../../common/AloTableList'

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
      lastName: 'Duque',
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

  const [open, setOpen] = useState(false)

  return (
    <>
      <AloModal open={open} setOpen={setOpen} />
      <AloTableList
        title="Lista de proveedores"
        textButtonCreate={'Agregar proveedor'}
        iconButtonCreate={<IconUserPlus/>}
        dataBody={dataBody}
        dataHeader={dataHeader}
        actions={actions}
        showActions={true}
        withSearch={true}
        searchProperty="name"
        onAddNew={() => setOpen(true)}
        onClickAction={(action, data) => console.log('eeeee', action, data)}
      />
    </>
  )
}
