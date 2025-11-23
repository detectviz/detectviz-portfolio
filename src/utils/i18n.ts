import zhTWTranslations from '../data/zh-tw.json';

const translations = {
  'zh-tw': zhTWTranslations,
};

// Helper function to safely access nested keys like "nav.start"
function getNestedValue(obj: any, path: string): string | undefined {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  return typeof current === 'string' ? current : undefined;
}

export function t(key: string, lang: string | undefined): string {
  const currentLang = lang || 'zh-tw';
  const langTranslations = translations[currentLang as keyof typeof translations] || translations['zh-tw'];

  const value = getNestedValue(langTranslations, key);

  if (value === undefined) {
    console.warn(`Translation key "${key}" not found for language "${currentLang}". Falling back to key.`);
    return key;
  }
  return value;
}
