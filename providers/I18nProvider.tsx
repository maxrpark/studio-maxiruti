"use client";

import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "@/i18n/config";

interface Props {
  children: React.ReactNode;
  locale: string;
}

export default function I18nProvider({ children, locale }: Props) {
  if (i18next.language !== locale) {
    i18next.changeLanguage(locale);
  }

  useEffect(() => {
    if (i18next.language !== locale) {
      i18next.changeLanguage(locale);
    }
  }, [locale]);

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
