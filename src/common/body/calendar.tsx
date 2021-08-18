import { Grid, Hidden, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'gatsby';
import moment, { Moment } from 'moment';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrangCalendarInfo } from '../lib/model';
import { muiTheme, theme } from '../lib/theme';
import { Tag } from './tag';

interface CalendarProps {
  month: number;
  year: number;
  getBrangs: (day: Moment) => BrangCalendarInfo[];
}

export const Calendar = ({ month, year, getBrangs }: CalendarProps) => {
  const firstDay = moment().month(month).year(year).startOf('month'),
    today = moment().startOf('day'),
    weeks = [] as Moment[][];

  var currentDate = firstDay.startOf('week'),
    currentWeek = [] as Moment[]
  while(currentDate.month() <= month) {
    for(var i = 0; i < 7; i++) {
      currentWeek.push(currentDate)
      currentDate = currentDate.clone().add(1, 'day')
    }
    weeks.push(currentWeek)
    currentWeek = [] as Moment[]
  }

  const getDayCell = (day: Moment, dayNum: number, brangs?: BrangCalendarInfo[]) => {
    const isToday = day.isSame(today),
      isPast = day.isBefore(today);

    return applyHidden((
      <Grid item container className={clsx(styles.columnCell,
        styles.dataCell,
        isToday && styles.todayCell,
        isPast && styles.pastCell)} key={dayNum}>
          <Grid item xs={6} sm={12}>
            {
              applyDayLink((
                <Typography className={clsx(
                  styles.dateText,
                  isPast && styles.pastDateText
                  )}>
                  {day.date()} <Hidden smUp>
                    <br/> {moment.weekdays(true)[day.weekday()]}
                    </Hidden>
                </Typography>
              ), day, brangs?.length)
            }
          </Grid>
          <Grid item xs={12}>
            { brangs?.length?
              <Grid container direction="column" spacing={1}>
                {
                  brangs!.slice(0, 2).map((brang, i) =>
                    <Grid item key={i}>
                      <Tag disabled={isPast}>
                        <Link to={`/brang/${brang.id}`}>{brang.name}</Link>
                      </Tag>
                    </Grid>)
                }
                {
                  brangs!.length > 2 && <Grid item key="more">
                  <Tag disabled={isPast}>
                    + {brangs!.length - 2} бранга
                  </Tag>
                </Grid>
                }
              </Grid> : null
            }
          </Grid>
      </Grid>
    ), isToday, isPast, brangs?.length);
  }

  const applyHidden = (elem: JSX.Element, isToday: boolean, isPast: boolean, brangsCount?: number) => {
    const futureWithEvents = !isToday && !isPast && brangsCount;
    if (isToday || futureWithEvents) {
      return elem;
    } else {
      return (
        <Hidden xsDown>
          {elem}
        </Hidden>
      )
    }
  }

  const applyDayLink = (elem: JSX.Element, day: Moment, brangsCount?: number) => {
    if (brangsCount) {
      return (
        <Link to={`/day/${day.format("YYYY-MM-DD")}`}>
          {elem}
        </Link>
      )
    } else {
      return elem;
    }
  }

  const styles = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <div className={styles.container}>
        <Hidden xsDown>
          <Grid container wrap="wrap" className={styles.header}>
            {
              moment.weekdaysShort(true).map(day =>
                  <Grid item key={day} className={
                    clsx(styles.columnCell, styles.headerCell)}>
                      <Typography className={styles.headerText}>{day}</Typography>
                  </Grid>
                )
            }
          </Grid>
        </Hidden>
        <Grid container direction="column">
          {weeks!.map((week, weekNum) =>
              <Grid item container key={weekNum}>
                {
                  week.map((day, dayNum) => getDayCell(day, dayNum, getBrangs(day)))
                }
              </Grid>
            )}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

const desktopBreakpoint = muiTheme.breakpoints.up('sm'),
  mobileBreakpoint = muiTheme.breakpoints.down('xs')

const useStyles = makeStyles(muiTheme => ({
  headerText: {
    fontSize: '18px',
    lineHeight: '24px',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    overflow: 'hidden'
  },
  container: {
    borderRadius: '12px',
    margin: '24px',
    border: theme.borders.largeBorder
  },
  header: {
    boxSizing: 'border-box',
    maxWidth: '100%'
  },
  columnCell: {
    border: theme.borders.tableBorder,
    backgroundColor: theme.colors.table.default
  },
  dataCell: {
    [mobileBreakpoint]: { // Mobile
      width: '100%',
      height: 'fit-content',
      flexWrap: "nowrap",
      flexDirection: "row"
    },
    [desktopBreakpoint]: { // Desktop
      width: 'calc(100% / 7)',
      height: '8rem',
      flexDirection: "column"
    },
    padding: '6px',
    position: 'relative',
  },
  dateText: {
    fontSize: '22px',
    lineHeight: '28px',
    textAlign: 'left',
    position: 'absolute',
    left: '10px',
    top: '5px',
    color: theme.colors.disabledText,
    [mobileBreakpoint]: { // Mobile
      display: 'contents',
    },
    [desktopBreakpoint]: { // Desktop
    },
  },
  pastDateText: {
    textDecoration: 'line-through'
  },
  headerCell: {
    width: 'calc(100% / 7)',
    background: theme.colors.transparentBackground,
    padding: "12px"
  },
  todayCell: {
    backgroundColor: theme.colors.table.today
  },
  pastCell: {
    backgroundColor: theme.colors.table.past
  }
}));
