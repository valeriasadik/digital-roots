"use client";

export interface TabItemProps {
  label: string;
  index: number;
  isActive: boolean;
  onClick: (arg0: number) => void;
  id: string;
  ariaControls: string;
}

export const TabItem: React.FC<TabItemProps> = ({
  label,
  index,
  isActive,
  onClick,
  id,
  ariaControls,
}) => {
  const baseStyles =
    "rounded-3xl font-medium py-2 px-4 md:px-6 text-sm md:text-base transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600 whitespace-nowrap";

  const activeStyles = "bg-green-900 text-white";
  const inactiveStyles = "bg-transparent text-gray-700 hover:bg-amber-300";

  return (
    <button
      id={id}
      role="tab"
      aria-selected={isActive}
      aria-controls={ariaControls}
      onClick={() => onClick(index)}
      className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
    >
      {label}
    </button>
  );
};
