import React, { ReactElement } from 'react'
import CustomerLayout from '@/layouts/customerLayout'
import { NextPageWithLayout } from '@/pages/_app'

const CustomizeOrder: NextPageWithLayout = () => {
    return (
        <>
        </>
    )
}


CustomizeOrder.getLayout = function getLayout(page: ReactElement){
    return (
        <CustomerLayout>
            {page}
        </CustomerLayout>
    )
}
export default CustomizeOrder