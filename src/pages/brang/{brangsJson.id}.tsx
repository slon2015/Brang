import React from "react"
import { graphql } from "gatsby"
import { BrangQuery, QueryData } from "../../common/lib/model"
import { Body } from "../../common/brangInfo"
import { SocialEvent } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";
import '../styles.css'
import moment from "moment";
import { Head } from "../../common/seo";
import { pageDefault } from "../../common/lib/common";

pageDefault()

const mapDateForLd = (date: string, time: string | null) => {
  const dateFormat = "YYYY-MM-DD",
   text = time? date + " " + time: date,
   m = time? moment(text, dateFormat + " hh:mm") : moment(text, dateFormat)
  return m.toISOString(true)
}

const BrangInfo = ({ data }: QueryData<BrangQuery, never>) => {
  const eventLdDescription = helmetJsonLdProp<SocialEvent>({
    "@context": "https://schema.org",
    "@type": "SocialEvent",
    doorTime: mapDateForLd(data.brangsJson.date, data.brangsJson.startTime),
    endDate: mapDateForLd(data.brangsJson.date, data.brangsJson.endTime || data.brangsJson.startTime),
    isAccessibleForFree: true,
    location: data.brangsJson.location,
    inLanguage: "ru",
    description: data.brangsJson.description,
    url: data.brangsJson.link,
    name: data.brangsJson.name,
    about: data.brangsJson.tags
  })


  return (
    <>
      <Head ldData={eventLdDescription}/>
      <Body data={data.brangsJson}/>
    </>
  );
}

export const query = graphql`
  query getBarngInfo($id: String) {
    brangsJson(id: {eq: $id}) {
      date
      description
      id
      link
      location
      name
      startTime
      tags
    }
  }
`

export default BrangInfo
