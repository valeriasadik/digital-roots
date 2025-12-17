"use client";

import { AccordionItem } from "@/components/atoms/AccordionItem/AccordionItem";
import { useState } from "react";

export interface AccordeonData {
  label: string;
  content: React.ReactNode;
}

export interface AccordeonTabsProps {
  accordeon: AccordeonData[];
}

export const Accordion = ({ accordeon }: AccordeonTabsProps) => {
  const [openStates, setOpenStates] = useState<boolean[]>(
    accordeon.map(() => false)
  );

  function toggleAccordeon(index: number) {
    const newStates = [...openStates];
    newStates[index] = !newStates[index];
    setOpenStates(newStates);
  }
  return (
    <div className="flex flex-col gap-[10px] p-[50px]">
      {accordeon.map((accordeon, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white"
        >
          <AccordionItem
            label={accordeon.label}
            isOpen={openStates[index]}
            onClick={() => toggleAccordeon(index)}
          />
          {openStates[index] && (
            <div className="px-6 pb-4 text-neutral-600 mt-2">
              {accordeon.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
