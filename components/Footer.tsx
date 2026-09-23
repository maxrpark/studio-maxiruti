"use client";

import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear().toString();
  const copyright = t("footer.copyright").replace("{year}", currentYear);

  return (
    <footer className='w-full border-t border-black/5 mt-24 py-12 bg-canvas text-xs text-primary-muted'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
        <p>{copyright}</p>

        <div className='flex items-center gap-6'>
          <a
            href='https://maxiruti.com'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1 hover:text-primary-dark transition-colors'
          >
            <span>
              {/* {t("footer.builtBy")}  */}
              maxiruti.com
            </span>
            <ExternalLink className='w-3 h-3 opacity-70' />
          </a>
        </div>
      </div>
    </footer>
  );
}
