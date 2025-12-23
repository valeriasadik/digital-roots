"use client";

interface CustomInputProps {
  id: string;
  label?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  id,
  label,
  error,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-neutral-900">
          {label}
        </label>
      )}
      <input
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`
          w-full rounded-lg border px-4 py-3
          text-neutral-900 placeholder:text-neutral-400
          focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]
          transition-all duration-200
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-neutral-300 hover:border-neutral-400"
          }
        `}
      />
      {error && (
        <span className="text-sm text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
};
