import React from 'react';
import { ThemeProvider } from './src/themes/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
