import { sectionIds } from 'constants/consts';
import 'styled-components';

interface SectionTheme {
  backgroundColor: string;
  color: string;
  transition: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';
    colors: {
      primary: string;
      background: string;
      footer: {
        backgroundColor: string;
        color: string;
        transition: string;
      };
      header: {
        backgroundColor: string;
        color: string;
        transition: string;
      };
      anchor: {
        color: string;
      };
      divider: {
        borderTop: string;
      };
      error: {
        backgroundColor: string;
        textColor: string;
        buttonBackground: string;
        buttonText: string;
      };
      sections: Record<sectionIds, SectionTheme>;
    };
  }
}
