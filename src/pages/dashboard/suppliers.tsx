import { TableList } from '../../common/TableList'

export default function Suppliers() {
  const dataHeader: string[] = ['Id', 'Nombre', 'Apellido', 'Edad', 'Ciudad', 'Tipo']
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
  ]
  return (
    <>
      <TableList
        title="Lista de proveedores"
        textButtonCreate="Agregar proveedor"
        dataBody={dataBody}
        dataHeader={dataHeader}
        onAddNew={() => console.log('nuevooo')}
      />
    </>
  )
}
