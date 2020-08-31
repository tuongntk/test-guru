import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="header-fixed">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="#" onClick={e => e.preventDefault()}>
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <a href="index.html" className="navbar-brand logo">
              <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
            </a>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <a href="index.html" className="menu-logo">
                <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
              </a>
              <a id="menu_close" className="menu-close" href="#" onClick={e => e.preventDefault()}>
                <i className="fas fa-times" />
              </a>
            </div>
            <ul className="main-nav">
              <li className="active">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="login-link">
                <Link href="login">
                  <a>Login / Signup</a>
                </Link>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link href="login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="register">
                <a className="nav-link header-login" >Register</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sidebar-overlay"></div>
      </div>
    </header>
  )
}

export default Header;