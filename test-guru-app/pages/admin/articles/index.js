
import React, { useState } from 'react'
import { toast } from 'react-toastify';

import BasePage from '@/components/layouts/admin/BasePage'
import Header from '@/components/layouts/admin/Header'
import PageWrapper from '@/components/layouts/admin/PageWrapper'
import PageHeader from '@/components/layouts/admin/PageHeader'
import SideBar from '@/components/layouts/admin/SideBar'
import ArticleApi from '@/libs/api/articles';

import { useCreateArticle } from '@/services/articles';

const Articles = ({ articles }) => {
  
  return (
    <BasePage>
      <Header />
      <SideBar />
      <PageWrapper>
        <PageHeader title="Articles" />

        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Articles</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm">

                <div className="table-responsive">
                  <table className="datatable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Invoice Number</th>
                        <th>Mentee ID</th>
                        <th>Mentee Name</th>
                        <th>Total Amount</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        articles.map(article =>
                          <tr key={article._id}>
                            <td>{article.title}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        )
                      }
                      <tr>
                        <td><a href="invoice.html">#IN0001</a></td>
                        <td>#01</td>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/user/user.jpg" alt="User Image" /></a>
                            <a href="profile.html">Jonathan Doe </a>
                          </h2>
                        </td>
                        <td>$100.00</td>
                        <td className="text-center">
                          <span className="badge badge-pill bg-success inv-badge">Paid</span>
                        </td>
                        <td className="text-right">
                          <div className="actions">
                            <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                              <i className="fe fe-pencil" /> Edit</a>
                            <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                              <i className="fe fe-trash" /> Delete</a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>


              </div>
            </div>
          </div>
        </div>

      </PageWrapper>
    </BasePage>
  )
}

export async function getServerSideProps(context) {
  const { data } = await new ArticleApi().getAll();


  const articles = data.data.map(item => ({...item}));

  console.log(articles);

  return {
    props: { articles }
  }
}

export default Articles