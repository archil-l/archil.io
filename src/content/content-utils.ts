export const getMarkdownPath = (section: string, locale: string): string => {
  const lang = locale || 'en';
  return `/content/${section}.${lang}.md`;
};
