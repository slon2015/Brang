
export interface QueryData<T, P> {
  data: T,
  params: P
}

export interface BrangCalendarInfo {
  date: string,
  name: string,
  id: string,
  tags: string[]
}

export interface BrangDayInfo extends BrangCalendarInfo {
  startTime: string,
}

export interface DetailedBrangInfo extends BrangCalendarInfo {
  description: string,
  location: string,
  startTime: string,
  endTime: string | null,
  link: string
}

interface TagsMixin {
  allTagsJson: {
    nodes: {
      name: string
    }[]
  }
}

export interface CalendarQuery extends TagsMixin {
  allBrangsJson: {
    nodes: BrangCalendarInfo[],
    totalCount: number
  },
}

export interface DateParam {
  date: string
}

export interface DayQuery extends TagsMixin {
  allBrangsJson: {
    nodes: BrangDayInfo[]
  }
}

export interface BrangQuery {
  brangsJson: DetailedBrangInfo
}
