import { toast } from 'sonner'

import { AloButton } from '@components/AloButton'
import { AloInput } from '@components/AloInput'
import { AloModal } from '@components/AloModal'
import { AloSelect } from '@components/AloSelect'
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from '@store/api/products/productsApi'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Props {
  open: boolean
  product?: Record<string, unknown>
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
  product,
  isEditing = false,
}: Props) {
  const [updateProduct] = useUpdateProductMutation()
  const [addProduct] = useAddProductMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<any> = (data) => {
    const productUpdated = { ...product, ...data }
    console.log({ data, productUpdated })
    if (isEditing) {
      updateProduct(productUpdated)
        .then((_) => {
          toast.success('Producto actualizado correctamente!')
        })
        .catch((_) => {
          toast.error('Error actualizando el producto')
        })
    }
    if (!isEditing) {
      const pro = {
        ...productUpdated,
        categoryId: 1,
        images: [
          'https://picsum.photos/640/640?r=9495',
          'https://picsum.photos/640/640?r=5955',
          'https://picsum.photos/640/640?r=1730',
        ],
      }
      addProduct(pro)
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
              value={product?.name as string}
            />
            <AloInput
              value={product?.email as string}
              register={register}
              label="Correo"
              name="email"
              errors={errors}
              required={false}
            />
          </div>
          <AloSelect
            defaultValue={product?.role as string}
            options={options}
            register={register}
            errors={errors}
            label="sexo"
            labelText="Selecciona sexo"
          />
          {/* <AloInput
            register={register}
            type="text"
            label="Ciudad"
            value={product?.city as string}
            errors={errors}
            required={false}
          /> */}
        </form>
      </AloModal>
    </>
  )
}
