import React from 'react';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span><i className="fe fe-home" /> Main</span>
            </li>
            <li className="active">
              <a href="index.html"><span>Dashboard</span></a>
            </li>
            <li>
              <a href="mentor.html"><span>Mentor</span></a>
            </li>
            <li>
              <a href="mentee.html"><span>Mentee</span></a>
            </li>
            <li>
              <a href="booking-list.html"><span>Booking List</span></a>
            </li>
            <li>
              <a href="categories.html"><span>Categories</span></a>
            </li>
            <li>
              <a href="transactions-list.html"><span>Transactions</span></a>
            </li>
            <li>
              <a href="settings.html"><span>Settings</span></a>
            </li>
            <li className="submenu">
              <a href="#"><span> Reports</span> <span className="menu-arrow" /></a>
              <ul style={{ display: 'none' }}>
                <li><a href="invoice-report.html">Invoice Reports</a></li>
              </ul>
            </li>
            <li className="menu-title">
              <span><i className="fe fe-document" /> Pages</span>
            </li>
            <li>
              <a href="profile.html"><span>My Profile</span></a>
            </li>
            <li className="submenu">
              <a href="#"><span>Blog</span> <span className="menu-arrow" /></a>
              <ul style={{ display: 'none' }}>
                <li><a href="blog.html"> Blog </a></li>
                <li><a href="blog-details.html"> Blog Details </a></li>
                <li><a href="add-blog.html"> Add Blog </a></li>
                <li><a href="edit-blog.html"> Edit Blog </a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><span> Authentication </span> <span className="menu-arrow" /></a>
              <ul style={{ display: 'none' }}>
                <li><a href="login.html"> Login </a></li>
                <li><a href="register.html"> Register </a></li>
                <li><a href="forgot-password.html"> Forgot Password </a></li>
                <li><a href="lock-screen.html"> Lock Screen </a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><span> Error Pages </span> <span className="menu-arrow" /></a>
              <ul style={{ display: 'none' }}>
                <li><a href="error-404.html">404 Error </a></li>
                <li><a href="error-500.html">500 Error </a></li>
              </ul>
            </li>
            <li>
              <a href="blank-page.html"><span>Blank Page</span></a>
            </li>
            <li className="menu-title">
              <span><i className="fe fe-star-o" /> UI Interface</span>
            </li>
            <li>
              <a href="components.html"><span>Components</span></a>
            </li>
            <li className="submenu">
              <a href="#"><span> Forms </span> <span className="menu-arrow" /></a>
              <ul style={{ display: 'none' }}>
                <li><a href="form-basic-inputs.html">Basic Inputs </a></li>
                <li><a href="form-input-groups.html">Input Groups </a></li>
                <li><a href="form-horizontal.html">Horizontal Form </a></li>
                <li><a href="form-vertical.html"> Vertical Form </a></li>
                <li><a href="form-mask.html"> Form Mask </a></li>
                <li><a href="form-validation.html"> Form Validation </a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><span> Tables </span> <span className="menu-arrow" /></a>
              <ul style={{ display: 'none' }}>
                <li><a href="tables-basic.html">Basic Tables </a></li>
                <li><a href="data-tables.html">Data Table </a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><span>Multi Level</span> <span className="menu-arrow" /></a>
              <ul style={{ display: 'none' }}>
                <li className="submenu">
                  <a href="#"> <span>Level 1</span> <span className="menu-arrow" /></a>
                  <ul style={{ display: 'none' }}>
                    <li><a href="#"><span>Level 2</span></a></li>
                    <li className="submenu">
                      <a href="#"> <span> Level 2</span> <span className="menu-arrow" /></a>
                      <ul style={{ display: 'none' }}>
                        <li><a href="#">Level 3</a></li>
                        <li><a href="#">Level 3</a></li>
                      </ul>
                    </li>
                    <li><a href="#"> <span>Level 2</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"> <span>Level 1</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar;