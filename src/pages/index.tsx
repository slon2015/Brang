import React from 'react';
import { pageDefault } from '../common/lib/common';
import { Head } from '../common/seo';
import { WellcomePageBody } from '../common/wellcomePage';

import './styles.css'

pageDefault()

const WellcomePage = () => {
  return (
    <>
      <Head/>
      <WellcomePageBody/>
    </>
  )
}

export default WellcomePage;
