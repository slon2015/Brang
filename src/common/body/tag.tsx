import { Box, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { theme } from '../lib/theme';

interface TagProps {
  classes?: {
    box?: string,
    typography?: string
  },
  disabled?: boolean
}

export const Tag = ({children, classes, disabled}: PropsWithChildren<TagProps>) => {
  const styles = useStyles()

  return (
    <Box className={clsx(styles.tag, classes?.box, disabled? styles.disabledTag: styles.enabledTag)}>
      <Typography className={clsx(styles.tagText, classes?.typography)}>{children}</Typography>
    </Box>
  )
}

const useStyles = makeStyles({
  tag: {
    textAlign: 'center',
    borderRadius: '6px',
    padding: "5px",
    marginRight: "5px"
  },
  tagText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    fontSize: '14px',
    lineHeight: '20px',
    wordWrap: 'unset'
  },
  enabledTag: {
    backgroundColor: theme.colors.tagColor
  },
  disabledTag: {
    backgroundColor: theme.colors.disabledTag
  }
})
