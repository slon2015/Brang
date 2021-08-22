import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Header } from '../header';
import { muiTheme } from '../lib/theme';
import { Panel } from '../panel';
import { Menu } from './menu';
import { MenuTree } from './menuUtils';

interface BodyProps {
  tree: MenuTree
}

export const Body = ({tree}: BodyProps) => {

  return (
    <ThemeProvider theme={muiTheme}>
      <Header/>
      <Panel>
        <Menu tree={tree}/>
      </Panel>
    </ThemeProvider>
  )
}
