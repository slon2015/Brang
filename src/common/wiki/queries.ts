

export interface MenuQuery {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string;
        ref: string;
      },
      parent: {
        relativeDirectory: string;
      }
    }[]
  }
}

export interface WikiPageQuery extends MenuQuery {
  mdx: {
    frontmatter: {
      title: string;
    }
    body: string;
  }
}
