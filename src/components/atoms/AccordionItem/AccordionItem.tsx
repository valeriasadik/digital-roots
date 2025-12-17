"use client";

export interface AccordionItemProps {
  label: string;
  isOpen: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  label,
  isOpen,
  onClick,
  icon = "▶",
}) => {
  return (
    <h3>
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-neutral-900 transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
      >
        <span className="text-base md:text-lg">{label}</span>
        <span
          aria-hidden
          className="text-green-900 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          {icon}
        </span>
      </button>
    </h3>
  );
};
