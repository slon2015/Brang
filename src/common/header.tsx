import { Box, Grid, IconButton, makeStyles } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import React from 'react';
import { theme } from './lib/theme';

export const Header = () => {
  const styles = useStyles()
  return (
    <>
      <Box className={styles.headerGap}/>
      <Box className={styles.header}>
        <Grid container>
          <IconButton href="/">
            <ChevronLeft/>
          </IconButton>
        </Grid>
      </Box>
    </>
  )
}

const useStyles = makeStyles({
  header: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '10%',
    width: '100%',
    backgroundImage: theme.colors.headerBackground
  },
  headerGap: {
    height: '10%'
  }
})
