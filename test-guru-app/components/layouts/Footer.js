import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src="/assets/img/logo.png" alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-facebook-f" /> </a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-twitter" /> </a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-linkedin-in" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-instagram" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-dribbble" /> </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Mentee</h2>
                <ul>
                  <li><a href="search.html">Search Mentors</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="register.html">Register</a></li>
                  <li><a href="booking.html">Booking</a></li>
                  <li><a href="dashboard-mentee.html">Mentee Dashboard</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Mentors</h2>
                <ul>
                  <li><a href="appointments.html">Appointments</a></li>
                  <li><a href="chat.html">Chat</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="register.html">Register</a></li>
                  <li><a href="dashboard.html">Mentor Dashboard</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">Contact Us</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span><i className="fas fa-map-marker-alt" /></span>
                    <p> 3556  Beech Street, San Francisco,<br /> California, CA 94108 </p>
                  </div>
                  <p>
                    <i className="fas fa-phone-alt" />
                +1 315 369 5943
              </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope" />
                mentoring@example.com
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="copyright">
            <div className="row">
              <div className="col-12 text-center">
                <div className="copyright-text">
                  <p className="mb-0">© 2020 Mentoring. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;