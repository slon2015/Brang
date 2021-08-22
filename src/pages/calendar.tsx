import React from "react";


import { Body } from "../common/body";
import { graphql } from "gatsby";
import { CalendarQuery, QueryData } from "../common/lib/model";
import { Head } from "../common/seo";
import { Layout } from "../common/layout";

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

const home = ({data}: QueryData<CalendarQuery, never>) => (
  <div className="home">
    <Layout>
      <Head/>
      <Body brangs={data.allBrangsJson.nodes} tags={data.allTagsJson.nodes.map(tag => tag.name)}/>
    </Layout>
  </div>
);

export default home;
