import { IconPencil, IconTrash } from '@tabler/icons-react'
import { TableList } from '../../common/TableList'

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
  return (
    <>
      <TableList
        title="Lista de proveedores"
        textButtonCreate="Agregar proveedor"
        dataBody={dataBody}
        dataHeader={dataHeader}
        actions={actions}
        showActions={true}
        withSearch={true}
        searchProperty='name'
        onAddNew={() => console.log('nuevooo')}
        onClickAction={(action, data) => console.log('eeeee',action, data)}
      />
    </>
  )
}
