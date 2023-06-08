import React, { ReactElement } from 'react'
import CustomerLayout from '@/layouts/customerLayout'
import { NextPageWithLayout } from '@/pages/_app'

const PurchaseHistory: NextPageWithLayout = () => {
    return (
        <>
        </>
    )
}


PurchaseHistory.getLayout = function getLayout(page: ReactElement){
    return (
        <CustomerLayout>
            {page}
        </CustomerLayout>
    )
}
export default PurchaseHistory