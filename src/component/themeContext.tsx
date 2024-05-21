import React, { createContext, ReactNode, useContext, useState } from "react";
import { AppDarkTheme, AppLightTheme, ThemeAmber, ThemeBlue, ThemeBrown, ThemeCyan, ThemeDeepOrange, ThemeDeepPurple, ThemeGreen, ThemeIndigo, ThemeLightBlue, ThemeLightGreen, ThemeLime, ThemeOrange, ThemePink, ThemePurple, ThemeRed, ThemeTeal, ThemeYellow } from './colorTheme';

type ThemeContextType = {
  theme: typeof AppLightTheme;
  switchColorTheme: (name: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: AppLightTheme,
  switchColorTheme: () => { } // Default empty function
});

type ThemeProviderProps = {
  children: ReactNode;
}

export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

  const [theme, setTheme] = useState(AppLightTheme);

  const switchColorTheme = (name: any) => {
    console.log(name);
    switch (name) {
      case 'Dark':
        setTheme(AppDarkTheme);
        break;
      case 'Blue':
        setTheme(ThemeBlue);
      case 'Deep Purple':
        setTheme(ThemeDeepPurple);
        break;
      case 'Light Blue':
        setTheme(ThemeLightBlue);
        break;
      case 'Light Green':
        setTheme(ThemeLightGreen);
        break;
      case 'Lime':
        setTheme(ThemeLime);
        break
      case 'Yellow':
        setTheme(ThemeYellow);
        break;
        case 'Teal':
          setTheme(ThemeTeal);
          break;
      case 'Indigo':
        setTheme(ThemeIndigo);
        break;
      case 'Green':
        setTheme(ThemeGreen);
        break;
      case 'Red':
        setTheme(ThemeRed);
        break;
      case 'Pink':
        setTheme(ThemePink);
        break;
      case 'Purple':
        setTheme(ThemePurple);
        break;
      case 'Cyan':
        setTheme(ThemeCyan);
        break;
      case 'Amber':
        setTheme(ThemeAmber);
        break;
      case 'Orange':
        setTheme(ThemeOrange);
        break;
      case 'Deep Orange':
        setTheme(ThemeDeepOrange);
        break;
      case 'Brown':
        setTheme(ThemeBrown);
        break;
      default:
        setTheme(AppLightTheme);
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, switchColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};