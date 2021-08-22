import { graphql } from "gatsby";
import React from "react";
import { pageDefault } from "../../common/lib/common";
import { QueryData } from "../../common/lib/model";
import { Head } from "../../common/seo";
import { Body } from "../../common/wiki";
import { MenuEntry, MenuTreeNode, readMenu } from "../../common/wiki/menuUtils";
import { MenuQuery } from "../../common/wiki/queries";
import '../styles.css';

pageDefault()


export const query = graphql`
  {
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
  }
`

const Index = ({data}: QueryData<MenuQuery, never>) => {
  const items = data.allMdx.nodes.map(n => ({
    title: n.frontmatter.title,
    topic: n.parent.relativeDirectory? n.parent.relativeDirectory: null,
    ref: n.frontmatter.ref
  })) as MenuEntry[]
  return (
    <>
      <Head/>
      <Body tree={readMenu(items)}/>
    </>
  )
}

export default Index;
