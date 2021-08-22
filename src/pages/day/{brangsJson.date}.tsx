import { graphql } from 'gatsby';
import React from 'react';
import { useState } from 'react';
import { Body } from '../../common/dayInfo';
import { Layout } from '../../common/layout';
import { pageDefault } from '../../common/lib/common';
import { DateParam, DayQuery, QueryData } from '../../common/lib/model';
import { Head } from '../../common/seo';

pageDefault();

export const query = graphql`
  query dayQuery($date: Date) {
    allBrangsJson(filter: {date: {eq: $date}}) {
      nodes {
        id
        name
        startTime
        tags
      }
    }
    allTagsJson {
      nodes {
        name
      }
    }
  }
`

const Day = ({data, params}: QueryData<DayQuery, DateParam>) => {
  const [selected, setSelected] = useState([] as string[]),
    brangs = data.allBrangsJson.nodes.filter(b =>
      selected.length == 0 || b.tags.filter(t => selected.includes(t)).length > 0)

  return (
    <Layout>
      <Head/>
      <Body
       day={params.date}
       brangs={brangs}
       categories={data.allTagsJson.nodes.map(tag => tag.name)}
       selectedCategories={selected}
       selectCategories={setSelected}
      />
    </Layout>
  )
}

export default Day;
