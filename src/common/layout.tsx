import { ThemeProvider } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { pageDefault } from './lib/common';
import { muiTheme } from './lib/theme';
import 'moment/locale/ru';
import "../pages/styles.css";

export const Layout = ({children}: PropsWithChildren<never>) => {
  useEffect(pageDefault, [])
  return (
    <ThemeProvider theme={muiTheme}>
      {children}
    </ThemeProvider>
  )
}
