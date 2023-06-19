import React, { ReactElement } from 'react'
import CustomerLayout from '@/layouts/customerLayout'
import { NextPageWithLayout } from '@/pages/_app'
import CategoriesSidebar from '@/components/sections/common/CategoriesSidebar'

const Category: NextPageWithLayout = () => {
    return (
        <>
        <div className='p-4 sm:ml-64 '>
        <div className=''>
          <CategoriesSidebar />
        </div>
        
      </div>
        </>
    )
}


Category.getLayout = function getLayout(page: ReactElement){
    return (
        <CustomerLayout>
            {page}
        </CustomerLayout>
    )
}
export default Category