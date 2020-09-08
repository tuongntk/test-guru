import React from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

const BasePage = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        <title>Test Guru - Administrator</title>
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
        <link rel="stylesheet" href="/admin/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/admin/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/admin/assets/css/feathericon.min.css" />
        <link rel="stylesheet" href="/admin/assets/plugins/morris/morris.css" />
        <link rel="stylesheet" href="/admin/assets/css/style.css" />
        <link rel="stylesheet" href="/admin/assets/plugins/datatables/datatables.min.css"></link>
        <script src="/admin/assets/js/html5shiv.min.js" />
        <script src="/admin/assets/js/respond.min.js" />
      </Head>
      <div className="main-wrapper">
        {children}
        <ToastContainer />
      </div>
    </>
  )
}

export default BasePage;