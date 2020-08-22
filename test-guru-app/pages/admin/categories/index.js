
import React, { useState } from 'react'

import BasePage from '@/components/layouts/admin/BasePage'
import Header from '@/components/layouts/admin/Header'
import PageWrapper from '@/components/layouts/admin/PageWrapper'
import PageHeader from '@/components/layouts/admin/PageHeader'
import SideBar from '@/components/layouts/admin/SideBar'

const Categories = () => {
  return (
    <BasePage>
      <Header />
      <SideBar />
      <PageWrapper>
        <PageHeader title="Categories" />

        

      </PageWrapper>
    </BasePage>
  )
}

export default Categories