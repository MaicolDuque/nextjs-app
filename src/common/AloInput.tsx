import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  useForm,
  UseFormRegister,
  UseFormRegisterReturn,
} from 'react-hook-form'

interface InputProps {
  type?: 'text' | 'number'
  label: any
  placeholder?: string
  required?: boolean
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<any>
}

export function AloInput({
  type = 'text',
  label,
  errors,
  register,
  required = true,
  placeholder = 'Type',
}: InputProps) {

  return (
    <>
      <div className="flex flex-col w-full my-1">
        <label htmlFor={label} className="text-gray-500 mb-2">
          {label}
        </label>
        <input
          {...(register && register(label, { required }))}
          type={type}
          id={label}
          placeholder={placeholder}
          className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3
          placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg"
        />
        {errors[label] && <span>This field is required</span>}
      </div>
    </>
  )
}
