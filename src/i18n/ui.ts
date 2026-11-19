export const languages = { en: 'EN', es: 'ES' } as const;
export const defaultLang = 'en' as const;
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'sys.label': 'Personal Archive',
    'nav.now': 'Now',
    'nav.writing': 'Writing',
    'nav.projects': 'Projects',
    'nav.links': 'Links',
    'status.online': 'Systems Online',
    'home.intro': "I'm an engineer who likes building things that last. I'm drawn to great software and great people.",
    'archive.heading': 'Recent Articles',
    'archive.empty': 'No articles yet.',
    'back': '← Back to archive',
    'meta.description': 'Personal archive of Alberto Le Baron — frontend, AI engineering, web tech, and whatever else is on my mind.',
    'now.label': 'Now',
    'now.intro': 'Learning how to build agents on Vercel\'s platform.',
    'now.reading.label': 'Reading',
    'now.reading.value': 'The Hundred-Page Machine Learning Book, Andriy Burkov',
    'now.updated': 'Last updated',
    'page.now.title': 'Now',
    'projects.label': 'Projects',
    'page.projects.title': 'Projects',
    'links.label': 'Links',
    'page.links.title': 'Links',
  },
  es: {
    'sys.label': 'Archivo Personal',
    'nav.now': 'Ahora',
    'nav.writing': 'Escritos',
    'nav.projects': 'Proyectos',
    'nav.links': 'Enlaces',
    'status.online': 'Sistemas en Línea',
    'home.intro': 'Soy un ingeniero al que le gusta construir cosas que perduren. Me atrae el buen software y la buena gente.',
    'archive.heading': 'Artículos Recientes',
    'archive.empty': 'Aún no hay artículos.',
    'back': '← Volver al archivo',
    'meta.description': 'Archivo personal de Alberto Le Baron — frontend, ingeniería de IA, tecnología web y lo que sea que tenga en mente.',
    'now.label': 'Ahora',
    'now.intro': 'Aprendiendo a construir agentes en la plataforma de Vercel.',
    'now.reading.label': 'Leyendo',
    'now.reading.value': 'The Hundred-Page Machine Learning Book, Andriy Burkov',
    'now.updated': 'Última actualización',
    'page.now.title': 'Ahora',
    'projects.label': 'Proyectos',
    'page.projects.title': 'Proyectos',
    'links.label': 'Enlaces',
    'page.links.title': 'Enlaces',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in languages) return segment as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === '/' ? '' : clean}`;
}
