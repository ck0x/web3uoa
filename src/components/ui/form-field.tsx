// Mock UI components for temporary use
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

const baseInputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  registerProps: UseFormRegisterReturn;
  error?: FieldError;
  numericOnly?: boolean;
}

export function FormInput({
  registerProps,
  error,
  numericOnly,
  ...props
}: FormInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (numericOnly) {
      e.target.value = e.target.value.replace(/\D/g, "");
    }
    if (registerProps?.onChange) {
      registerProps.onChange(e);
    }
  };
  return (
    <div>
      <input
        className={baseInputClass}
        {...props}
        {...registerProps}
        onChange={handleChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  registerProps: UseFormRegisterReturn;
  error?: FieldError;
  children: React.ReactNode;
}

export function FormSelect({
  registerProps,
  error,
  children,
  ...props
}: FormSelectProps) {
  return (
    <div>
      <select className={baseInputClass} {...props} {...registerProps}>
        {children}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
