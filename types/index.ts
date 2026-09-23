// Languages supported by this website showcase
export type SiteLocale = "en" | "es";
export type Locale = SiteLocale;

// All languages that individual apps might support in their stores
export type AppLanguage = "en" | "es" | "pt" | "it" | "fr" | "de";

export interface LocalizedString {
  en: string;
  es?: string;
  pt?: string;
}

export type Platform = "all" | "ios" | "android";

export interface StoreLinks {
  ios?: string;
  android?: string;
  mac?: string;
}

export interface AppItem {
  id: string;
  title: string;
  tagline: LocalizedString;
  description?: LocalizedString;
  icon: string;
  thumbnail?: string;
  accentColor?: string;
  languages: AppLanguage[];
  featured?: boolean;
  stores: StoreLinks;
  website: string;
  tags: string[];
}
