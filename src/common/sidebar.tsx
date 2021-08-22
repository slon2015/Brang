import { makeStyles, SwipeableDrawer, useMediaQuery } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import { useState } from 'react';
import { mobileBreakpoint } from './lib/theme';

export const Sidebar = ({children}: PropsWithChildren<never>) => {

  const openedByDefault = useMediaQuery(mobileBreakpoint),
    [opened, toggle] = useState(openedByDefault),
    styles = useStyles()

  const toggleDrawer = (open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
    ) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      toggle(open);
    };

  return (
    <SwipeableDrawer
      anchor="left"
      open={opened}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <div
        className={styles.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {children}
      </div>
    </SwipeableDrawer>
  )
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});
