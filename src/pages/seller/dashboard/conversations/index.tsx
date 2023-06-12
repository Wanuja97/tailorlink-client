
import type { ReactElement } from 'react';
import Layout from '../../../../layouts/sellerLayout';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import type { NextPageWithLayout } from '../../../_app';

const Conversations: NextPageWithLayout = () => {
  return (
    <>
    Conversations
    </>
  );
}

Conversations.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Conversations;