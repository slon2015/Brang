import { Grid } from "@material-ui/core"
import moment, { Moment } from "moment"
import * as React from "react"
import { useState } from "react"
import { Header } from "../header"
import { BrangCalendarInfo } from "../lib/model"
import { Calendar } from "./Calendar"
import { CalendarControls } from "./calendarControls"

interface BodyProps {
  brangs: BrangCalendarInfo[],
  tags: string[]
}

export const Body = ({brangs, tags}: BodyProps) => {
  const now = moment().startOf('day')
  const [period, setPeriod] = useState({
    month: now.month(),
    year: now.year(),
  }),
  [categories, setCategories] = useState({
    selected: [] as string[]
  }),
  changePeriod = (m: number ,y: number ) => {
    setPeriod({
      month: m,
      year: y
    })
  },
  changeSelectedCategories = (value: string[]) => {
    setCategories({
      selected: value
    })
  },
  getBrangs = (day: Moment) => {
    return brangs
      .filter(brang => categories.selected.length === 0 ||
        brang.tags.map(tag => categories.selected.includes(tag))
          .reduce((b1, b2) => b1 || b2)
      )
      .filter(brang => day.format("YYYY-MM-DD") === brang.date)
  }
  return (
    <>
      <Header/>
      <Grid container direction="column">
        <Grid item>
          <CalendarControls
            {...period}
            changePeriod={changePeriod}
            categories={tags}
            selectedCategories={categories.selected}
            changeSelectedCategories={changeSelectedCategories}
          />
        </Grid>
        <Grid item>
          <Calendar month={period.month} year={period.year} getBrangs={getBrangs}/>
        </Grid>
      </Grid>
    </>
  )
}
