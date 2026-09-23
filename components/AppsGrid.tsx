"use client";

import React, { useState, useMemo } from "react";
import FilterPills from "@/components/FilterPills";
import AppCard from "@/components/AppCard";
import { AppItem, Locale, Platform } from "@/types";

interface AppsGridProps {
  apps: AppItem[];
}

export default function AppsGrid({ apps }: AppsGridProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("all");

  const counts = useMemo(() => {
    return {
      all: apps.length,
      ios: apps.filter((app) => Boolean(app.stores.ios)).length,
      android: apps.filter((app) => Boolean(app.stores.android)).length,
    };
  }, [apps]);

  const filteredApps = useMemo(() => {
    if (selectedPlatform === "all") return apps;
    return apps.filter((app) => Boolean(app.stores[selectedPlatform]));
  }, [apps, selectedPlatform]);

  return (
    <div className='space-y-10'>
      <FilterPills
        selectedPlatform={selectedPlatform}
        onSelect={setSelectedPlatform}
        counts={counts}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}
