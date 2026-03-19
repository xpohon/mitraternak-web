import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
  };
}

const routeMap: Record<string, string> = {
  tentang: 'about',
  kegiatan: 'activities',
  kontak: 'contact',
  media: 'media',
  produk: 'products',
};

const reverseRouteMap: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([id, en]) => [en, id])
);

export function getLocalizedPath(path: string, targetLang: Lang): string {
  const cleanPath = path.replace(/^\/en\/?/, '/').replace(/\/$/, '') || '/';

  if (targetLang === 'en') {
    if (cleanPath === '/') return '/en';
    const segments = cleanPath.split('/').filter(Boolean);
    const translatedSegments = segments.map((seg) => routeMap[seg] || seg);
    return '/en/' + translatedSegments.join('/');
  }

  // Target is ID (default)
  if (cleanPath === '/') return '/';
  const segments = cleanPath.split('/').filter(Boolean);
  const translatedSegments = segments.map((seg) => reverseRouteMap[seg] || seg);
  return '/' + translatedSegments.join('/');
}

export function getAlternateUrls(path: string, site: string) {
  return {
    id: site + getLocalizedPath(path, 'id'),
    en: site + getLocalizedPath(path, 'en'),
  };
}
