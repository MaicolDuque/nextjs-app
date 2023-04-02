import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  type?: 'text' | 'number'
  label: any
  value?: string | number;
  placeholder?: string
  required?: boolean
  errors: FieldErrors<FieldValues>
  register: UseFormRegister<any>
}

export function AloInput({
  type = 'text',
  label,
  value,
  errors,
  register,
  required = true,
  placeholder = 'Type',
}: InputProps) {
  return (
    <>
      <div className="flex flex-col w-full my-1">
        <div className='flex gap-2 items-center'>
          <label htmlFor={label} className="text-gray-900 mb-2 font-medium">
            {label}
          </label>
          {errors[label] && (
            <span className="text-red-600 mb-2 text-sm">Este campo es obligatorio</span>
          )}
        </div>
        <input
          {...(register && register(label, { required }))}
          type={type}
          defaultValue={value}
          id={label}
          placeholder={placeholder}
          className="appearance-none border-2 border-gray-200 rounded-lg px-4 py-3
          placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-alo-primary focus:shadow-lg"
        />
      </div>
    </>
  )
}
