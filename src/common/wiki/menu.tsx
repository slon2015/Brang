import { MenuArticleNode, MenuItem, MenuTopicNode, MenuTree } from "./menuUtils";
import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";
import { TreeItem, TreeView } from "@material-ui/lab";
import { ChevronRight, ExpandMore } from "@material-ui/icons";
import { Link } from "gatsby";

interface MenuProps {
  tree: MenuTree
}

export const Menu = ({tree}: MenuProps) => {

  const styles = useStyles();

  const label = (node: MenuItem) => {
    if (node.type === "article") { // Is article?
      return <Link className={styles.node} to={`/docs/${(node as MenuArticleNode).id}`}>{node.name}</Link>
    } else {
      return <Typography className={styles.node}>{node.name}</Typography>
    }
  }

  const renderTree = (node: MenuItem) => {
    return (
      <TreeItem key={node.name} nodeId={node.name} label={label(node)}>
        {node.type === "topic"? (node as MenuTopicNode).childrens.map(renderTree) : null}
      </TreeItem>
    )
  }

  return (
    <>
      <Typography className={styles.title}>Содержание</Typography>
      <TreeView
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight/>} >
          {tree.items.map(renderTree)}
      </TreeView>
    </>
  )
}

const useStyles = makeStyles({
  title: {
    fontSize: '34px',
    lineHeight: '40px',
    marginBottom: '20px'
  },
  node: {
    fontSize: '22px',
    lineHeight: '28px'
  }
})
