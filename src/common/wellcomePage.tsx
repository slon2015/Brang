import { Box, Button, Grid, Icon, IconButton, makeStyles, SvgIcon, Typography } from '@material-ui/core';
import React from 'react';
import { Header } from './header';
import { muiTheme, theme } from './lib/theme';
import { Panel } from './panel';


export const WellcomePageBody = () => {
  const styles = useStyles()
  return (
    <>
      <Header/>
      <Box className={styles.container}>
        <Grid container direction="column" alignItems="stretch" spacing={1}>
          <Grid item>
            <Panel>
              <Typography variant="h2" className={styles.title}>
                Brang
              </Typography>
              <Typography variant="body1">
                Brang это место сбора людей, увдеченных созданием и развитием идей.
                Мы участвуем в мозговых штурмах по интересным нам темам и создаем свои сообщества единомышленников.
                Задача этой площадки - <i>
                  помочь вам найти свои путь на поле идей и стать вашим проводником в мир мозговых штурмов.
                </i>
              </Typography>
            </Panel>
          </Grid>
          <Grid item>
            <Panel>
              <Typography variant="h2" className={styles.title}>
                Как это работает?
              </Typography>
              <Typography variant="body1">
                Начать свою деятельность в нашем сообществе очень просто:
                <ul>
                  <li>Перейти на страницу календаря</li>
                  <li>Выбрать интересующие вас категории в списке сверху</li>
                  <li>Подобрать мероприятия в удобное для вас время</li>
                  <li>Ознакомиться со страницей мероприятия</li>
                  <li>Перейти по ссылке на странице мероприятия и зарегестрироваться на сайте</li>
                </ul>
                <Button href="/calendar" className={styles.button}>
                  Перейти к календарю
                </Button>
              </Typography>
            </Panel>
          </Grid>
          <Grid item>
            <Panel>
              <Typography variant="h2" className={styles.title}>
                Хочу узнать больше!
              </Typography>
              <Typography variant="body1">
                Чувствуете себя неуверенно в теме мозговых штурмов или хотите расширить свои познания?
                Мы поможем! У нас есть раздел с исчерпывающей документацией по мозговым штурмам.
                <br/>
                <Button href="/docs" className={styles.button}>
                  Перейти к базе знаний
                </Button>
              </Typography>
            </Panel>
          </Grid>
          <Grid item>
            <Panel>
              <Typography variant="h2" className={styles.title}>
                Могу ли я разместить своё мероприятие?
              </Typography>
              <Typography variant="body1">
                Мы активно работаем с инициативными представителями нашего сообщества.
                Их мероприятия являются важнейшей частью нашей площадки.
                Если вы хотите присоедениться к числу наших организаторов - напишите нам. Наша администрация с радостью поддержит вашу инициативу
                <br/>
                <IconButton href="https://vk.com/brangcommunity">
                  <Icon>
                    <img className={styles.icon} src="/vk.svg"/>
                  </Icon>
                </IconButton>
              </Typography>
            </Panel>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

const useStyles = makeStyles({
  container: {},
  button: {
    backgroundColor: theme.colors.tagColor
  },
  icon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit',
  },
  title: {
    fontSize: '28px',
    lineHeight: '34px'
  }
})
