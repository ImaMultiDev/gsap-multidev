export interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  theory: string;
  code?: string;
  animationFunction?: () => void;
  difficulty?: "beginner" | "intermediate" | "advanced";
  duration?: string;
  tags?: string[];
}

export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  icon?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
}

export interface AnimationConfig {
  target: string;
  duration: number;
  ease?: string;
  delay?: number;
  repeat?: number;
  yoyo?: boolean;
  [key: string]: string | number | boolean | undefined;
}

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export interface AnimationDemoProps {
  id: string;
  animationFunction: () => void;
  resetKey?: number;
  height?: string;
  className?: string;
}

export interface ChapterLayoutProps {
  chapter: Chapter;
  children?: React.ReactNode;
}

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
