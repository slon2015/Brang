import React from "react";

import { Helmet } from "react-helmet";

import "./styles.css";
import { Body } from "../common/body";
import moment from "moment";
import 'moment/locale/ru';
import { graphql } from "gatsby";
import { CalendarQuery, QueryData } from "../common/lib/model";
import { Head } from "../common/seo";

export const query = graphql`
{
  allBrangsJson {
    nodes {
      date
      tags
      name
      id
    }
    totalCount
  }
  allTagsJson {
    nodes {
      name
    }
  }
}
`



moment.locale('ru', {
  week: {
    dow: 1,
  }
})

const home = ({data}: QueryData<CalendarQuery, never>) => (
  <div className="home">
    <Head/>
    <Body brangs={data.allBrangsJson.nodes} tags={data.allTagsJson.nodes.map(tag => tag.name)}/>
  </div>
);

export default home;
