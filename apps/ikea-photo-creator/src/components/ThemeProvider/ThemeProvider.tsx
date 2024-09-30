'use client';

import { ThemeProvider as MUIThemeProvider, Theme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { PropsWithChildren } from 'react';

export type ThemeProviderProps = PropsWithChildren<{
  theme: Theme;
}>;

export default function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
