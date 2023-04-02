import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

type Options = {
  id: string | number
  label: string
  value: any
}

interface SelectProps {
  selectLabel?: string
  defaultValue: any
  labelText?: string
  options: Options[]

  label?: string
  required?: boolean
  errors?: FieldErrors<FieldValues>
  register: UseFormRegister<any>
}

export function AloSelect({
  selectLabel = 'Selecciona...',
  defaultValue = '',
  labelText,
  options,
  errors,
  register,
  required = true,
  label = 'Selecciona una opcion',
}: SelectProps) {
  return (
    <>
      {labelText && (
        <div className="flex gap-2 items-center">
          <label htmlFor={label} className="text-gray-900 mb-2 font-medium">
            {labelText}
          </label>
          {errors?.[label] && (
            <span className="text-red-600 mb-2 text-sm">
              Este campo es obligatorio
            </span>
          )}
        </div>
      )}
      <select
        defaultValue={defaultValue}
        {...register(label, { required })}
        className="bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-300 px-4 py-4 text-sm rounded-lg focus:outline-none focus:ring-indigo-500 focus:indigo-blue-500 block w-full "
      >
        <option value="">{selectLabel}</option>
        {options.map((option) => {
          return <option key={option.id} value={option.value}>{option.label}</option>
        })}
      </select>
    </>
  )
}
