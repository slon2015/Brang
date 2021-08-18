import { FormControl, Grid, IconButton, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { theme } from '../lib/theme';
import { Tag } from './tag';

interface CategorySelectorProps {
  categories: string[],
  selectedCategories: string[]
  changeSelectedCategories: (selected: string[]) => void
}

export const CategorySelector = ({
  categories,
  selectedCategories,
  changeSelectedCategories
}: CategorySelectorProps) => {
  const styles = useStyles();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    changeSelectedCategories(event.target.value as string[]);
  };

  const renderValue = (value: unknown) => (
      Boolean(value) && <div className={styles.chips}>
        {(value as string[]).map((value) => (
          <Tag key={value}>{value}</Tag>
        ))}
      </div>
  )

  return (
    <Grid container justifyContent="center" alignItems="center" wrap="nowrap">
      <Grid item>
        <FormControl>
          <InputLabel id="categorySelectorLabel">Категории</InputLabel>
          <Select
            className={styles.select}
            labelId="categorySelectorLabel"
            id="categorySelector"
            multiple
            value={selectedCategories}
            renderValue={renderValue}
            MenuProps={MenuProps}
            onChange={handleChange}
            >
              {categories.map((name) => (
                <MenuItem key={name} value={name} className={styles.menuItem}>
                  {name}
                </MenuItem>
              ))}
            </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <IconButton onClick={() => changeSelectedCategories([])}>
          <Close/>
        </IconButton>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    "& > div": {
      marginRight: "5px"
    }
  },
  select: {
    minWidth: "200px",
    marginBottom: "20px"
  },
  menuItem: {
    color: theme.colors.disabledText
  }
})
