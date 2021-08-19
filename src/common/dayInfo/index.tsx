import { Grid, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import moment from "moment";
import React from "react";
import { CategorySelector } from "../body/categorySelector";
import { Tag } from "../body/tag";
import { Header } from "../header";
import { BrangDayInfo } from "../lib/model";
import { muiTheme } from "../lib/theme";
import { Panel } from "../panel";

interface BodyProps {
  day: string
  brangs: BrangDayInfo[],
  categories: string[],
  selectedCategories: string[],
  selectCategories: (selected: string[]) => void
}

export const Body = ({day, brangs, selectedCategories, categories, selectCategories}: BodyProps) => {
  const styles = useStyles();
  return (
    <ThemeProvider theme={muiTheme}>
      <Header/>
      <Grid container direction="column" spacing={3} alignItems="stretch">
        <Grid item>
          <Panel>
            <Grid container direction="column" spacing={1} alignItems="stretch">
              <Grid item container justifyContent="center">
                <Typography className={styles.day}>
                  {moment(day, "YYYY-MM-DD").format("D MMMM YYYY")}
                </Typography>
              </Grid>
              <Grid item>
                <CategorySelector
                  categories={categories}
                  selectedCategories={selectedCategories}
                  changeSelectedCategories={selectCategories}/>
              </Grid>
            </Grid>
          </Panel>
        </Grid>
        {
          brangs.map((brang, i) => (
            <Grid item key={i}>
              <Panel className={styles.brangPanel}>
                <Grid container justifyContent="space-between" wrap="nowrap" alignItems="center" spacing={1}>
                  <Grid item sm={8} xs={4}>
                    <Link to={`/brang/${brang.id}`}>
                      <Typography variant="h2" className={styles.name}>{brang.name}</Typography>
                    </Link>
                  </Grid>
                  <Grid item container direction="column" alignItems="center" spacing={2} sm={4} xs={8}>
                    <Grid item>
                      <Typography variant="h2" className={styles.time}>
                        {brang.startTime}
                      </Typography>
                    </Grid>
                    <Grid item container justifyContent="center" wrap="nowrap">
                      {brang.tags.map((tag, i) => (
                        <Grid item key={i}>
                          <Tag>
                            {tag}
                          </Tag>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Panel>
            </Grid>
          ))
        }
      </Grid>
    </ThemeProvider>
  )
}

const useStyles = makeStyles(muiTheme => ({
  name: {
    fontSize: "20px",
  },
  time: {
    fontSize: "20px",
  },
  brangPanel: {
    padding: "10px"
  },
  day: {
    fontSize: "34px",
    lineHeight: "40px"
  }
}))
