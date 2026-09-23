import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Locale } from "@/types";

interface NavbarProps {
  currentLocale: Locale;
  portfolioLabel: string;
}

export default function Navbar({ currentLocale, portfolioLabel }: NavbarProps) {
  return (
    <header className='w-full border-b border-black/5 bg-canvas/80 backdrop-blur-md sticky top-0 z-40'>
      <div className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between'>
        <Link
          href={`/${currentLocale}`}
          className='text-base font-bold tracking-tight text-primary-dark hover:opacity-80 transition-opacity'
        >
          Maxi Ruti{" "}
          <span className='font-light text-primary-muted'>Studio</span>
        </Link>

        <div className='flex items-center gap-6'>
          <a
            href='https://maxiruti.com'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 text-xs font-semibold text-primary-muted hover:text-primary-dark transition-colors'
          >
            <span>{portfolioLabel}</span>
            <ExternalLink className='w-3.5 h-3.5 opacity-70' />
          </a>

          <div className='h-4 w-px bg-black/8' aria-hidden='true' />

          <LanguageSwitcher currentLocale={currentLocale} />
        </div>
      </div>
    </header>
  );
}
