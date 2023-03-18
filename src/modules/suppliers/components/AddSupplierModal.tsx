import { AloButton } from '@common/AloButton'
import { AloInput } from '@common/AloInput'
import { AloModal } from '@common/AloModal'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'


interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

export function AddSupplierModal({ open, setOpen }: Props) {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm();
  const onSubmit: SubmitHandler<any> = data => {
    alert(JSON.stringify(data));
    setOpen(false)
  };

  const footer = (
    <>
      <AloButton text='Cancelar' onClick={(_e) => setOpen(false)} type='outline' />
      <AloButton text='Guardar' onClick={handleSubmit(onSubmit)} type='fill' />
    </>
  )

  return (
    <>
      <AloModal
        open={open}
        setOpen={setOpen}
        title="Agregar Proveedor"
        footer={footer}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex gap-2'>
            <AloInput register={register} label="Nombre" errors={errors}  />
            <AloInput register={register} label="Apellido" errors={errors} required={false} />
          </div>
          <AloInput register={register} type="number" label="Age" errors={errors} required={false} />
          <AloInput register={register} type="text" label="Ciudad" errors={errors} required={false} />
        </form>
      </AloModal>
    </>
  )
}
