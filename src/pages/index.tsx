import React from 'react';
import { Layout } from '../common/layout';
import { Head } from '../common/seo';
import { WellcomePageBody } from '../common/wellcomePage';

const WellcomePage = () => {
  return (
    <Layout>
      <Head/>
      <WellcomePageBody/>
    </Layout>
  )
}

export default WellcomePage;
