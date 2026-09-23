"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AppItem, Locale } from "@/types";

interface AppCardProps {
  app: AppItem;
}

export default function AppCard({ app }: AppCardProps) {
  const { t, i18n } = useTranslation();
  const locale = (i18n.language === "es" ? "es" : "en") as Locale;
  const tagline = app.tagline[locale] || app.tagline.en;

  const getLanguageLabel = () => {
    const total = app.languages.length;
    if (total <= 1) {
      return t("card.englishOnly");
    }
    if (total <= 3) {
      return app.languages.map((l) => l.toUpperCase()).join(" · ");
    }
    return t("card.languagesCount", { count: total });
  };

  const formattedLanguagesList = app.languages
    .map((code) => t(`languages.${code}`, { defaultValue: code.toUpperCase() }))
    .join(", ");

  const hasMobileStores = Boolean(app.stores.ios || app.stores.android);

  return (
    <div className='group relative bg-surface rounded-3xl overflow-hidden border border-black/5 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between'>
      <div>
        {/* Cover / Thumbnail Banner */}
        <div
          className='relative h-44 w-full flex items-center justify-center overflow-hidden'
          style={{ backgroundColor: app.accentColor || "#F3F4F6" }}
        >
          {app.thumbnail ? (
            <img
              src={app.thumbnail}
              alt={`${app.title} thumbnail`}
              className='object-cover transition-transform duration-500 group-hover:scale-105'
            />
          ) : (
            <div className='text-black/20 font-bold text-lg tracking-wider uppercase select-none'>
              {app.title}
            </div>
          )}

          {/* Top badges */}
          <div className='absolute top-3 right-3 flex items-center gap-1.5 z-10'>
            {app.featured && (
              <span className='px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/90 text-primary-dark backdrop-blur-sm shadow-xs'>
                {t("card.featured")}
              </span>
            )}

            {/* Language Pill with Tooltip */}
            <div className='relative group/tooltip'>
              <span className='cursor-default inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-black/40 text-white backdrop-blur-xs tracking-wider transition-colors hover:bg-black/60'>
                {getLanguageLabel()}
              </span>

              <div className='pointer-events-none absolute right-0 top-full mt-1.5 opacity-0 translate-y-1 group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0 transition-all duration-150 z-20'>
                <div className='bg-neutral-900/95 text-white text-[10px] font-normal leading-tight px-2.5 py-1.5 rounded-lg shadow-lg whitespace-nowrap backdrop-blur-sm border border-white/10'>
                  {formattedLanguagesList}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className='p-6 pt-0 relative'>
          <div className='-mt-9 mb-4 relative w-16 h-16 rounded-squircle overflow-hidden border-2 border-surface shadow-md bg-white'>
            <img
              src={app.icon}
              alt={`${app.title} icon`}
              width={64}
              height={64}
              className='w-full h-full object-fit'
            />
          </div>

          <div className='flex items-center justify-between gap-2 mb-1.5'>
            <h3 className='text-lg font-bold text-primary-dark tracking-tight group-hover:text-black transition-colors'>
              {app.title}
            </h3>

            {app.website && (
              <a
                href={app.website}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-neutral-700 hover:text-black text-[11px] font-medium transition-colors border border-black/5 shrink-0'
              >
                <span>{t("actions.website")}</span>
                <ExternalLink className='w-3 h-3 opacity-60' />
              </a>
            )}
          </div>

          <p className='text-xs text-primary-muted leading-relaxed line-clamp-2'>
            {tagline}
          </p>
        </div>
      </div>

      {/* Store Action Links */}
      {hasMobileStores && (
        <div className='px-6 pb-6 pt-3 flex flex-wrap items-center gap-2 border-t border-black/5'>
          {app.stores.ios && (
            <a
              href={app.stores.ios}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-black text-white text-[11px] font-medium transition-colors'
            >
              <span> {t("actions.appStore")}</span>
            </a>
          )}

          {app.stores.android && (
            <a
              href={app.stores.android}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[11px] font-medium transition-colors'
            >
              <span>▶ {t("actions.googlePlay")}</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
