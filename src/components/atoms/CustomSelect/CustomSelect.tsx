"use client";

interface SelectOption {
  key: string;
  value: string;
}

interface CustomSelectProps {
  id: string;
  label?: string;
  placeholder?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  options: SelectOption[];
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  label,
  placeholder,
  error,
  onChange,
  value,
  options,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-neutral-900">
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`
          w-full rounded-lg border px-4 py-3
          text-neutral-900 bg-white
          focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]
          transition-all duration-200
          appearance-none cursor-pointer
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-neutral-300 hover:border-neutral-400"
          }
          ${!value || value === "" ? "text-neutral-400" : "text-neutral-900"}
        `}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-sm text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
};
