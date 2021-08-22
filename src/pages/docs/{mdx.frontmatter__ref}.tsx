import { graphql } from 'gatsby';
import React from 'react';
import { pageDefault } from "../../common/lib/common";
import { QueryData } from '../../common/lib/model';
import { MenuEntry, MenuTree, readMenu } from '../../common/wiki/menuUtils';
import { PageBody } from '../../common/wiki/pageIndex';
import { WikiPageQuery } from '../../common/wiki/queries';

pageDefault();

export const query = graphql`
  query docPageQuery($id: String) {
    allMdx(sort: {fields: frontmatter___order, order: ASC}) {
      nodes {
        frontmatter {
          title
          ref
        }
        parent {
          ... on File {
            relativeDirectory
          }
        }
      }
    }
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
      body
    }
  }
`

const Index = ({data}: QueryData<WikiPageQuery, never>) => {
  const menuTree = readMenu(
    data.allMdx.nodes.map(n => ({
      title: n.frontmatter.title,
      topic: n.parent.relativeDirectory? n.parent.relativeDirectory: null,
      ref: n.frontmatter.ref
    })) as MenuEntry[]
  )

  return <PageBody
      tree={menuTree}
      title={data.mdx.frontmatter.title}
      body={data.mdx.body}
    />
}

export default Index;

