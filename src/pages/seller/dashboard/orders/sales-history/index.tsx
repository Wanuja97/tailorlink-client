
import type { ReactElement } from 'react';
import Layout from '../../../../../layouts/sellerLayout';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import type { NextPageWithLayout } from '../../../../_app';

const SalesHistory: NextPageWithLayout = () => {
  return (
    <>
    Sales History
    </>
  );
}

SalesHistory.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default SalesHistory;