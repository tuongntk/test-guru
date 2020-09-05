
import React, { useState } from 'react'
import { toast } from 'react-toastify';

import BasePage from '@/components/layouts/admin/BasePage'
import Header from '@/components/layouts/admin/Header'
import PageWrapper from '@/components/layouts/admin/PageWrapper'
import PageHeader from '@/components/layouts/admin/PageHeader'
import SideBar from '@/components/layouts/admin/SideBar'
import ArticleForm from '@/components/admin/Article/ArticleForm';

const ArticleNew = () => {
  const [setting, setSetting] = useState({
    template: false,
    value: undefined,
  })

  const addArticle = async (data) => {
    // try {
    //   await updatePortfolio(router.query.id, data);
    //   toast.success('Portfolio has been updated!', {autoClose: 2000})
    // } catch {
    //   toast.error('Ooops some error!', {autoClose: 2000})
    // }

    // updatePortfolio(router.query.id, data)
    //   .then(() => toast.success('Portfolio has been updated!', {autoClose: 2000}))
    //   .catch(() => toast.error('Ooops some error!', {autoClose: 2000}))

    console.log(`%o`, data);
    //await updatePortfolio(router.query.id, data);
    //toast.success('Portfolio has been updated!', {autoClose: 2000})
  }

  return (
    <BasePage>
      <Header />
      <SideBar />
      <PageWrapper>
        <PageHeader title="New Article" />

        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Add new article</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm">
                <ArticleForm onSubmit={addArticle} />
              </div>
            </div>
          </div>
        </div>

      </PageWrapper>
    </BasePage>
  )
}

export default ArticleNew