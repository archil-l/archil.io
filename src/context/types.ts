
export type HomeContextProps = {
  theme: string;
  switchTheme: (theme?: string) => void;
}

export type HomeContextProviderProps = {
  children: React.ReactNode;
}