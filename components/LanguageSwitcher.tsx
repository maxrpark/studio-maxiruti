"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import i18next from "@/i18n/config";

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng: string) => {
    if (lng === currentLocale) return;

    i18next.changeLanguage(lng);
    document.cookie = `NEXT_LOCALE=${lng}; path=/; max-age=31536000; SameSite=Lax`;

    const segments = pathname.split("/");
    // segments[0] is empty string before the first slash, segments[1] is the locale
    segments[1] = lng;
    const newPath = segments.join("/") || `/${lng}`;

    router.push(newPath);
  };

  return (
    <div className='relative inline-flex items-center text-xs font-semibold tracking-wider text-neutral-600 hover:text-black'>
      <select
        value={currentLocale}
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label='Select language'
        className='appearance-none bg-transparent pr-5 py-1 text-xs font-semibold cursor-pointer outline-none uppercase transition-colors'
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className='absolute right-0 pointer-events-none w-3.5 h-3.5 text-neutral-400'
        strokeWidth={2.5}
      />
    </div>
  );
}
