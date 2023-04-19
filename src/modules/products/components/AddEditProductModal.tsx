import { toast } from 'sonner'

import { AloButton } from '@components/AloButton'
import { AloInput } from '@components/AloInput'
import { AloInputFileImages } from '@components/AloInputFileImages'
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
  { id: 1, value: 'M', label: 'Masculino' },
  { id: 2, value: 'F', label: 'Femenino' },
]

export function AddEditProductModal({
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
      updateProduct(productUpdated).then(_ => {
        toast.success('Producto actualizado correctamente!')
      })
      .catch(_ => {
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
              label="Titulo"
              name="title"
              errors={errors}
              value={product?.title as string}
            />
            <AloInput
              value={product?.description as string}
              register={register}
              label="Descripción"
              name="description"
              errors={errors}
              required={false}
            />
          </div>
          <AloInput
            register={register}
            type="number"
            value={product?.price as number}
            label="Precio"
            name="price"
            errors={errors}
            required={false}
          />
          {/* <AloInput
            register={register}
            type="text"
            label="Ciudad"
            value={product?.city as string}
            errors={errors}
            required={false}
          /> */}
          {/* <AloSelect
            defaultValue="M"
            options={options}
            register={register}
            errors={errors}
            label="sexo"
            labelText="Selecciona sexo"
          /> */}

          <AloInputFileImages label="Agregar imagenes" />
        </form>
      </AloModal>
    </>
  )
}
