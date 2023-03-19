import { AloButton } from '@common/AloButton'
import { AloInput } from '@common/AloInput'
import { AloModal } from '@common/AloModal'
import { AloSelect } from '@common/AloSelect'
import { useEffect, useState } from 'react'
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit: SubmitHandler<any> = (data) => {
    alert(JSON.stringify(data))
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
              errors={errors}
              value={product?.title as string}
            />
            <AloInput
              value={product?.description as string}
              register={register}
              label="Apellido"
              errors={errors}
              required={false}
            />
          </div>
          <AloInput
            register={register}
            type="number"
            value={product?.price as number}
            label="Precio"
            errors={errors}
            required={false}
          />
          <AloInput
            register={register}
            type="text"
            label="Ciudad"
            value={product?.city as string}
            errors={errors}
            required={false}
          />
          <AloSelect
            defaultValue="M"
            options={options}
            register={register}
            errors={errors}
            label="sexo"
            labelText="Selecciona sexo"
          />

          {/* <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="multiple_files"
          >
            Cargar imagenes
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
            id="multiple_files"
            type="file"
            multiple
          /> */}

        </form>
      </AloModal>
    </>
  )
}
