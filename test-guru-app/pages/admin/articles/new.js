
import React, { useState } from 'react'
import { toast } from 'react-toastify';

import BasePage from '@/components/layouts/admin/BasePage'
import Header from '@/components/layouts/admin/Header'
import PageWrapper from '@/components/layouts/admin/PageWrapper'
import PageHeader from '@/components/layouts/admin/PageHeader'
import SideBar from '@/components/layouts/admin/SideBar'
import ArticleForm from '@/components/admin/Article/ArticleForm';

import { useCreateArticle } from '@/services/articles';

const ArticleNew = () => {
  const [createArticle, { data, loading, error }] = useCreateArticle();

  const addArticle = async (data) => {
    console.log(`%o`, data);

    try {
      await createArticle(data);
      console.log(`Create Article Successfull`);

      //toast.success('Portfolio has been updated!', {autoClose: 2000})
    } catch (e) {
      //toast.error('Ooops some error!', {autoClose: 2000})
      console.error(e);
    }
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