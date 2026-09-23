"use client";

import { useTranslation } from "react-i18next";
import { Platform } from "@/types";

interface FilterPillsProps {
  selectedPlatform: Platform;
  onSelect: (platform: Platform) => void;
  counts: {
    all: number;
    ios: number;
    android: number;
  };
}

export default function FilterPills({
  selectedPlatform,
  onSelect,
  counts,
}: FilterPillsProps) {
  const { t } = useTranslation();

  const options: { id: Platform; label: string; count: number }[] = [
    { id: "all", label: t("filters.all"), count: counts.all },
    { id: "ios", label: t("filters.ios"), count: counts.ios },
    { id: "android", label: t("filters.android"), count: counts.android },
  ];

  // Only show options that have items, but always keep 'all'
  const visibleOptions = options.filter(
    (option) => option.id === "all" || option.count > 0,
  );

  // Hide the pill row entirely if there's only 'all'
  if (visibleOptions.length <= 1) {
    return null;
  }

  return (
    <div className='flex items-center gap-2 flex-wrap justify-center'>
      {visibleOptions.map((option) => {
        const isActive = selectedPlatform === option.id;
        return (
          <button
            key={option.id}
            type='button'
            onClick={() => onSelect(option.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-primary-dark text-white shadow-sm"
                : "bg-surface text-primary-muted hover:text-primary-dark border border-black/6 hover:border-black/12"
            }`}
          >
            {option.label}{" "}
            <span
              className={`text-[11px] ml-1 ${isActive ? "text-white/70" : "text-primary-subtle"}`}
            >
              {option.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
