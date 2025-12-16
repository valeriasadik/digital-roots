"use client";
import React, { useState } from "react";
import { TabItem } from "@/components/atoms/TabItem/TabItem";

export interface TabData {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabData[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  function onChangeTab(index: number) {
    setActiveIndex(index);
  }
  const tabsId = React.useId();
  return (
    <div className="w-full">
      <div
        className="flex flex-wrap gap-2 md:gap-3 border-b border-gray-200 pb-2"
        role="tablist"
        aria-label="Tabs sections"
      >
        {tabs.map((tab, index: number) => (
          <TabItem
            key={index}
            label={tab.label}
            index={index}
            isActive={activeIndex === index}
            onClick={onChangeTab}
            id={`${tabsId}-tab-${index}`}
            ariaControls={`${tabsId}-panel-${index}`}
          />
        ))}
      </div>
      <div
        className="mt-6 md:mt-8"
        role="tabpanel"
        id={`${tabsId}-panel-${activeIndex}`}
        aria-labelledby={`${tabsId}-tab-${activeIndex}`}
        tabIndex={0}
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};
