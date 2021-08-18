import { Box, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import {ChevronLeft, ChevronRight} from '@material-ui/icons';
import moment from 'moment';
import React from 'react';
import { theme } from '../lib/theme';
import { CategorySelector } from './categorySelector';

interface CalendarControlsProps {
  categories: string[],
  selectedCategories: string[]
  month: number,
  year: number,
  changePeriod: (month: number, year: number) => void,
  changeSelectedCategories: (selected: string[]) => void
}

export const CalendarControls = ({
  month,
  year,
  changePeriod,
  categories,
  selectedCategories,
  changeSelectedCategories
}: CalendarControlsProps) => {
  const decrementMonth = () => {
    if (month === 0) {
      changePeriod(12, year - 1)
    } else {
      changePeriod(month - 1, year)
    }
  },
  incrementMonth = () => {
    if (month === 11) {
      changePeriod(0, year + 1)
    } else {
      changePeriod(month + 1, year)
    }
  }
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Grid container direction="column">
        <Grid container item justifyContent="space-between" wrap="nowrap">
          <Grid item>
            <IconButton onClick={decrementMonth}>
              <ChevronLeft/>
            </IconButton>
          </Grid>
          <Grid item>
            <Typography className={styles.dateText}>
              {moment.months()[month]} {year}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={incrementMonth}>
              <ChevronRight/>
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <CategorySelector
            categories={categories}
            selectedCategories={selectedCategories}
            changeSelectedCategories={changeSelectedCategories}/>
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles(muiTheme => ({
  container: {
    border: theme.borders.largeBorder,
    backgroundColor: theme.colors.transparentBackground,
    borderRadius: "12px",
    margin: "24px"
  },
  dateText: {
    fontSize: "34px",
    lineHeight: "40px"
  }
}))
