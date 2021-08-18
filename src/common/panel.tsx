import { makeStyles, Paper } from '@material-ui/core';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { theme } from './lib/theme';

interface PanelProps {
  className?: string
}

export const Panel = ({children, className}: PropsWithChildren<PanelProps>) => {
  const styles = useStyles()
  return (
    <Paper className={clsx(styles.paper, className)}>
      {children}
    </Paper>
  )
}

const useStyles = makeStyles({
  paper: {
    margin: "24px",
    border: theme.borders.tableBorder,
    backgroundColor: theme.colors.transparentBackground
  }
})
