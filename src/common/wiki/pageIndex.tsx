import { Grid, Hidden, makeStyles, Paper, ThemeProvider, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { Header } from '../header';
import { desktopBreakpoint, muiTheme } from '../lib/theme';
import { Menu } from './menu';
import { MenuTree } from './menuUtils';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Panel } from '../panel';
import clsx from 'clsx';


interface PageBodyProps {
  tree: MenuTree,
  title: string,
  body: string
}

export const PageBody = ({tree, title, body} : PageBodyProps) => {
  const styles = useStyles()
  return (
    <ThemeProvider theme={muiTheme}>
      <Header/>
      <Grid container spacing={2} className={clsx(styles.container, styles.fullHeight)}>
        {
          useMediaQuery(desktopBreakpoint) && <Grid item sm={4}>
            <Panel className={styles.fullHeight}>
              <Menu tree={tree}/>
            </Panel>
          </Grid>
        }
        <Grid item xs={12} sm={8}>
          <Panel className={styles.fullHeight}>
            <Typography variant="h2" className={styles.title}>
              {title}
            </Typography> <br/>
            <Typography>
              <MDXRenderer>
                {body}
              </MDXRenderer>
            </Typography>
          </Panel>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

const useStyles = makeStyles({
  fullHeight: {
    height: '100%'
  },
  container: {
  },
  title: {
    fontSize: '34px',
    lineHeight: '40px'
  }
})
