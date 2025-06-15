type ContentPathProps = {
  filename: string;
  lang?: string;
};

export const getContentPath = ({ filename, lang = 'en' }: ContentPathProps): string => {
  return `/content/${filename}.${lang}.md`;
};
