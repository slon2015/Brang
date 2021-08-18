import { Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { Tag } from '../body/tag';
import { Header } from '../header';
import { DetailedBrangInfo } from '../lib/model';
import { muiTheme, theme } from '../lib/theme';
import { Panel } from '../panel';

interface BrangProps {
  data: DetailedBrangInfo
}

export const Body = ({data}: BrangProps) => {
  const {name, description, startTime, endTime, link, tags, location, date} = data,
    styles = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <Header/>
      <Grid container direction="column">
        <Grid item>
          <Panel>
            <Typography variant="h1" className={styles.mainText}>{name}</Typography>
            <Typography variant="h2" className={styles.secondaryText}>{moment(date, "YYYY-MM-DD").format("D MMMM YYYY")}<br/>
                Начало в {startTime}
                {!!endTime && <>
                  <br/>
                    Окончание в {endTime}
                  </>} <br/>
                Место проведения: {location}<br/>
            </Typography>
            <Grid container spacing={1}>
              {tags.map((tag, i) =>
                  <Grid item key={i}>
                    <Tag>{tag}</Tag>
                  </Grid>
                )}
            </Grid><br/>
            <a href={link}>
              <Tag classes={{box: styles.link}}>
                <Typography variant="body2">
                  Сылка на мероприятие
                </Typography>
              </Tag>
            </a>
          </Panel>
        </Grid>
        <Grid item>
          <Panel>
            <Typography variant="body1">{description}</Typography><br/>
          </Panel>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

const useStyles = makeStyles({
  mainText: {
    fontSize: "34px",
    lineHeight: "40px"
  },
  secondaryText: {
    fontSize: "16px",
    lineHeight: "1.3",
    color: theme.colors.disabledText,
    marginBottom: '10px'
  },
  link: {
    backgroundColor: theme.colors.attention,
    width: 'fit-content',
  }
})
