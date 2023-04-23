import { toast } from 'sonner'

import { AloButton } from '@components/AloButton'
import { AloInput } from '@components/AloInput'
import { AloModal } from '@components/AloModal'
import { AloSelect } from '@components/AloSelect'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAddSupplierMutation, useUpdateSupplierMutation } from '@store/api/suppliers/suppliersApi'

interface Props {
  open: boolean
  supplier?: Record<string, unknown>
  isEditing?: boolean
  setOpen: (open: boolean) => void
}

const options = [
  { id: 1, value: 'admin', label: 'Admin' },
  { id: 2, value: 'customer', label: 'Customer' },
]

export function AddEditSupplierModal({
  open,
  setOpen,
  supplier,
  isEditing = false,
}: Props) {
  const [updateSupplier] = useUpdateSupplierMutation()
  const [addSupplier] = useAddSupplierMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<any> = (data) => {
    const supplierUpdated = { ...supplier, ...data }
    console.log({ data, supplierUpdated })
    if (isEditing) {
      updateSupplier(supplierUpdated)
        .then((_) => toast.success('Proveedor actualizado correctamente!'))
        .catch((_) => toast.error('Error actualizando el proveedor'))
    }
    if (!isEditing) {
      console.log({ supplierUpdated })
      const info = {
        ...supplierUpdated,
        avatar: 'https://picsum.photos/640/640?r=9922',
      }
      addSupplier(info)
        .then((_) => toast.success('Proveedor agregado correctamente!'))
        .catch((_) => toast.error('Error agregando el proveedor'))
    }
    setOpen(false)
  }

  const footer = (
    <>
      <AloButton
        text="Cancelar"
        onClick={(_e) => setOpen(false)}
        type="outline"
      />
      <AloButton text="Guardar" onClick={handleSubmit(onSubmit)} type="fill" />
    </>
  )

  return (
    <>
      <AloModal
        open={open}
        setOpen={setOpen}
        title={`${isEditing ? 'Editar' : 'Agregar'} Producto`}
        footer={footer}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2">
            <AloInput
              register={register}
              label="Nombre"
              name="name"
              errors={errors}
              value={supplier?.name as string}
            />
            <AloInput
              value={supplier?.email as string}
              register={register}
              label="Correo"
              name="email"
              errors={errors}
              required={true}
            />
          </div>
          <AloInput
            value={supplier?.password as string}
            register={register}
            label="Contraseña"
            name="password"
            type="password"
            errors={errors}
            required={true}
          />
          <AloSelect
            defaultValue={supplier?.role as string}
            options={options}
            register={register}
            errors={errors}
            label="role"
            labelText="Rol"
          />
          {/* <AloInput
            register={register}
            type="text"
            label="Ciudad"
            value={supplier?.city as string}
            errors={errors}
            required={false}
          /> */}
        </form>
      </AloModal>
    </>
  )
}
