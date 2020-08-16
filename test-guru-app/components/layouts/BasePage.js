import React from 'react';
import Head from 'next/head';
import Footer from './Footer';

const BasePage = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        <title>Test Guru</title>
        <link type="image/x-icon" href="assets/img/favicon.png" rel="icon" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <script src="assets/js/jquery.min.js" />
		    <script src="assets/js/popper.min.js" />
    		<script src="assets/js/bootstrap.min.js" />
    		<script src="assets/js/owl.carousel.min.js" />
    		<script src="assets/js/script.js" />
        <script src="assets/js/html5shiv.min.js" />
			  <script src="assets/js/respond.min.js" />
        <script src="assets/plugins/theia-sticky-sidebar/ResizeSensor.js" />
        <script src="assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js" />
      </Head>
      <div className="main-wrapper">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default BasePage;