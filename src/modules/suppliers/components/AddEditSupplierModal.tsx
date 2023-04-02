import { AloButton } from '@components/AloButton'
import { AloInput } from '@components/AloInput'
import { AloModal } from '@components/AloModal'
import { AloSelect } from '@components/AloSelect'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Props {
  open: boolean
  supplier?: Record<string, unknown>
  isEditing?: boolean
  setOpen: (open: boolean) => void
}

const options = [
  { id: 1, value: 'M', label: 'Masculino' },
  { id: 2, value: 'F', label: 'Femenino' },
]

export function AddEditSupplierModal({
  open,
  setOpen,
  supplier,
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
        title={`${isEditing ? 'Editar' : 'Agregar'} Proveedor`}
        footer={footer}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2">
            <AloInput
              register={register}
              label="Nombre"
              errors={errors}
              value={supplier?.name as string}
            />
            <AloInput
              value={supplier?.lastName as string}
              register={register}
              label="Apellido"
              errors={errors}
              required={false}
            />
          </div>
          <AloInput
            register={register}
            type="number"
            value={supplier?.edad as string}
            label="Age"
            errors={errors}
            required={false}
          />
          <AloInput
            register={register}
            type="text"
            label="Ciudad"
            value={supplier?.city as string}
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
        </form>
      </AloModal>
    </>
  )
}
