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
              <a href="categories.html"><span>Categories</span></a>
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
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar;