"use client";

interface CustomTextAreaProps {
  id: string;
  label?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder: string;
  rows?: number;
}

export const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  id,
  label,
  error,
  onChange,
  value,
  placeholder,
  rows = 4,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-neutral-900">
          {label}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        rows={rows}
        className={`
          w-full rounded-lg border px-4 py-3
          text-neutral-900 placeholder:text-neutral-400
          focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]
          transition-all duration-200
          resize-vertical
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
