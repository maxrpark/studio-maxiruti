import { AppItem } from "@/types";

export const APPS: AppItem[] = [
  {
    id: "hanni",
    title: "Hanni: Learn Korean",
    tagline: {
      en: "Vocabulary Games & Fast Typing",
      es: "Juegos de vocabulario y práctica de escritura rápida",
    },
    description: {
      en: "Learn Korean vocabulary through interactive games and quick typing exercises.",
      es: "Aprende vocabulario en coreano mediante juegos interactivos y práctica rápida de escritura.",
    },
    icon: "/assets/image/icons/hanni.webp",
    thumbnail: "/assets/image/thumbnails/hanni.webp",
    accentColor: "#FDE68A",
    languages: ["en", "es"],
    featured: true,
    stores: {
      ios: "https://apps.apple.com/us/app/hanni-learn-korean-adventure/id6804951859",
      // android:
      //   "https://play.google.com/store/apps/details?id=com.aprendecoreanopasoapaso.app",
    },
    website: "https://app.aprendecoreanopasoapaso.com/en",
    tags: ["Education", "Language"],
  },
  {
    id: "merame",
    title: "Merame: Match Cut",
    featured: true,
    tagline: {
      en: "Cinematic Stop Motion & Vlogs",
      es: "Stop motion cinemático y videoblogs creativos",
    },
    description: {
      en: "Create seamless match cut videos and aesthetic stop-motion vlogs with ease.",
      es: "Crea videos con transiciones match cut continuas y videoblogs en stop motion con fluidez.",
    },
    icon: "/assets/image/icons/merame.webp",
    thumbnail: "/assets/image/thumbnails/merame.webp",
    accentColor: "#E5E7EB",
    languages: ["en"],

    stores: {
      ios: "https://apps.apple.com/us/app/merame-match-cut-transitions/id6762237712",
    },
    website: "https://merame.maxiruti.com",
    tags: ["Video", "Creative"],
  },
  {
    id: "meleve",
    title: "Meleve: Before I Leave List",
    tagline: {
      en: "Never forget your essentials",
      es: "No olvides tus artículos indispensables",
    },
    description: {
      en: "Quick checklists to guarantee you leave nothing behind when heading out.",
      es: "Listas de verificación rápidas para asegurarte de llevar todo antes de salir.",
    },
    icon: "/assets/image/icons/meleve.webp",
    thumbnail: "/assets/image/thumbnails/meleve.webp",
    accentColor: "#E2E8F0",
    languages: ["en", "es", "pt"],
    stores: {
      ios: "https://apps.apple.com/us/app/meleve-before-i-leave-list/id6761100110",
    },
    website: "https://meleve.maxiruti.com/",
    tags: ["Utilities", "Checklist"],
  },
  {
    id: "feelino",
    title: "Feelino",
    tagline: {
      en: "Daily mood log for cat lovers",
      es: "Registro diario de ánimo para amantes de los gatos",
    },
    description: {
      en: "A cozy, feline-themed mood tracker and daily journal.",
      es: "Un diario y registro de estado de ánimo minimalista con temática felina.",
    },
    icon: "/assets/image/icons/feelino.webp",
    thumbnail: "/assets/image/thumbnails/feelino.webp",
    accentColor: "#FCE7F3",
    languages: ["en"],
    stores: {
      ios: "https://apps.apple.com/us/app/feelino/id6759881432",
    },
    website: "https://feelino.maxiruti.com/",
    tags: ["Lifestyle", "Journaling"],
  },
  {
    id: "split",
    title: "Split Workout Tracking",
    featured: true,
    tagline: {
      en: "Simple PPL workout tracking",
      es: "Seguimiento simple de rutinas Push Pull Legs",
    },
    description: {
      en: "Minimalist push-pull-legs routine tracker built for focus in the gym.",
      es: "Rastreador minimalista de rutinas PPL enfocado en evitar distracciones al entrenar.",
    },
    icon: "/assets/image/icons/split.webp",
    thumbnail: "/assets/image/thumbnails/split.webp",
    accentColor: "#FCA5A5",
    languages: ["en", "es", "pt", "it", "fr", "de"],
    stores: {
      ios: "https://apps.apple.com/us/app/split-workout-tracking/id6757720410",
      // android:

      //   "https://play.google.com/store/apps/details?id=com.maxiruti.split",
    },
    website: "https://split-workout.maxiruti.com/",
    tags: ["Fitness", "Health"],
  },
  {
    id: "tabs",
    title: "Tabs: Read It Later Pocket",
    tagline: {
      en: "Read saved links before expiry",
      es: "Lee enlaces guardados antes de que expiren",
    },
    description: {
      en: "Prevent tab overload by queuing articles with gentle expiration deadlines.",
      es: "Evita la acumulación de pestañas organizando lecturas pendientes con fechas de expiración.",
    },
    icon: "/assets/image/icons/tabs.webp",
    thumbnail: "/assets/image/thumbnails/tabs.webp",
    accentColor: "#FEF08A",
    languages: ["en"],
    stores: {
      ios: "https://apps.apple.com/us/app/tabs-read-it-later-pocket-app/id6801017459",
    },
    website: "https://tabs.maxiruti.com",
    tags: ["Productivity", "Utilities"],
  },

  {
    id: "ritual",
    title: "Ritual: Sanctuary",
    tagline: {
      en: "Breathe, Reflect & Track Mood",
      es: "Respira, reflexiona y monitorea tu ánimo",
    },
    description: {
      en: "A calming space for intentional breathing exercises and mindful reflection.",
      es: "Un espacio sereno para ejercicios de respiración pausada y reflexión consciente.",
    },
    icon: "/assets/image/icons/ritual.webp",
    thumbnail: "/assets/image/thumbnails/ritual.webp",
    accentColor: "#CCFBF1",
    languages: ["en"],
    stores: {
      ios: "https://apps.apple.com/us/app/ritual-sanctuary/id6758603682",
    },
    website: "https://www.ritualbreatheandreflect.com/",
    tags: ["Wellness", "Mindfulness"],
  },
];
