import React from 'react';
import { Header } from '../header';
import { Panel } from '../panel';
import { Menu } from './menu';
import { MenuTree } from './menuUtils';

interface BodyProps {
  tree: MenuTree
}

export const Body = ({tree}: BodyProps) => {

  return (
    <>
      <Header/>
      <Panel>
        <Menu tree={tree}/>
      </Panel>
    </>
  )
}
