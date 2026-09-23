"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className='text-center max-w-2xl mx-auto mb-14'>
      <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-primary-dark mb-4'>
        {t("site.title")}
      </h1>
      <p className='text-sm sm:text-base text-primary-muted font-normal leading-relaxed'>
        {t("site.subtitle")}
      </p>
    </section>
  );
}
