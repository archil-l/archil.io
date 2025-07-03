import { sectionIds } from 'constants/consts';
import { C } from 'react-router/dist/development/register-DCE0tH5m';
import 'styled-components';

interface SectionTheme {
  backgroundColor: string;
  color: string;
  transition: string;
  border?: string;
  textColor?: string;
  chat?: ChatTheme;
}

interface ChatTheme {
  border: string;
  backgroundColor: string;
  color: string;
  transition: string;
  assistantBubble: ChatBubbleTheme;
  userBubble: ChatBubbleTheme;
}

interface ChatBubbleTheme {
  backgroundColor: string;
  color: string;
  border?: string;
  transition?: string;
  boxShadow?: string;
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
