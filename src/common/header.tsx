import { Box, Button, Grid, IconButton, makeStyles } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import React from 'react';
import { theme } from './lib/theme';

interface HeaderProps {
  backRef?: string
}

export const Header = ({backRef}: HeaderProps) => {
  const styles = useStyles()
  return (
    <>
      <Box className={styles.headerGap}/>
      <Box className={styles.header}>
        <Grid container justifyContent="center" alignItems='center'
          className={styles.fullHeight}>
          {!!backRef && <Grid item>
            <IconButton href={backRef}>
              <ChevronLeft/>
            </IconButton>
          </Grid>}
          <Grid item>
            <Button href="/">Главная</Button>
          </Grid>
          <Grid item>
            <Button href="/docs">База знаний</Button>
          </Grid>
          <Grid item>
            <Button href="/calendar">Календарь</Button>
          </Grid>
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
  },
  fullHeight: {
    height: '100%'
  }
})
