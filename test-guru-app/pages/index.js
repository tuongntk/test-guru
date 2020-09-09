import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BasePage from '../components/layouts/BasePage';
import Header from '../components/layouts/Header';
import Content from '../components/layouts/Content';

import ArticleApi from '@/libs/api/articles';

const Home = ({ articles }) => {
  return (
    <BasePage>
      <Header />
      <Content>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog">
                <div className="blog-image">
                  <a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-01.jpg" alt="Post Image" /></a>
                </div>
                <h3 className="blog-title"><a href="blog-details.html">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</a></h3>
                <div className="blog-info clearfix">
                  <div className="post-left">
                    <ul>
                      <li>
                        <div className="post-author">
                          <a href="profile.html"><img src="assets/img/user/user.jpg" alt="Post Author" /> <span>Ruby Perrin</span></a>
                        </div>
                      </li>
                      <li><i className="far fa-clock" />4 Dec 2019</li>
                      <li><i className="far fa-comments" />12 Comments</li>
                      <li><i className="fa fa-tags" />HTML</li>
                    </ul>
                  </div>
                </div>
                <div className="blog-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a href="blog-details.html" className="read-more">Read More</a>
                </div>
              </div>
              <div className="blog">
                <div className="blog-image">
                  <div className="video">
                    <iframe width={940} src="https://www.youtube.com/embed/ZMty6R0Bn0I" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                </div>
                <h3 className="blog-title"><a href="blog-details.html">The standard Lorem Ipsum passage, used since the</a></h3>
                <div className="blog-info clearfix">
                  <div className="post-left">
                    <ul>
                      <li>
                        <div className="post-author">
                          <a href="profile.html"><img src="assets/img/user/user2.jpg" alt="Post Author" /> <span>Deborah Angel</span></a>
                        </div>
                      </li>
                      <li><i className="far fa-clock" />3 Dec 2019</li>
                      <li><i className="far fa-comments" />2 Comments</li>
                      <li><i className="fa fa-tags" />C++</li>
                    </ul>
                  </div>
                </div>
                <div className="blog-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a href="blog-details.html" className="read-more">Read More</a>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-12">
                  <div className="blog-pagination">
                    <nav>
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-double-left" /></a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#"><i className="fas fa-angle-double-right" /></a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <div className="card search-widget">
                <div className="card-body">
                  <form className="search-form">
                    <div className="input-group">
                      <input type="text" placeholder="Search..." className="form-control" />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-primary"><i className="fa fa-search" /></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card post-widget">
                <div className="card-header">
                  <h4 className="card-title">Latest Posts</h4>
                </div>
                <div className="card-body">
                  <ul className="latest-posts">
                    <li>
                      <div className="post-thumb">
                        <a href="blog-details.html">
                          <img className="img-fluid" src="assets/img/blog/blog-thumb-01.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="blog-details.html">Lorem Ipsum is simply dummy text of the printing</a>
                        </h4>
                        <p>4 Dec 2019</p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <a href="blog-details.html">
                          <img className="img-fluid" src="assets/img/blog/blog-thumb-02.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="blog-details.html">It is a long established fact that a reader will be</a>
                        </h4>
                        <p>3 Dec 2019</p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <a href="blog-details.html">
                          <img className="img-fluid" src="assets/img/blog/blog-thumb-03.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="blog-details.html">here are many variations of passages of Lorem Ipsum</a>
                        </h4>
                        <p>3 Dec 2019</p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <a href="blog-details.html">
                          <img className="img-fluid" src="assets/img/blog/blog-thumb-04.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="blog-details.html">The standard chunk of Lorem Ipsum used since the</a>
                        </h4>
                        <p>2 Dec 2019</p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <a href="blog-details.html">
                          <img className="img-fluid" src="assets/img/blog/blog-thumb-05.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="blog-details.html">generate Lorem Ipsum which looks reasonable</a>
                        </h4>
                        <p>1 Dec 2019</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card category-widget">
                <div className="card-header">
                  <h4 className="card-title">Blog Categories</h4>
                </div>
                <div className="card-body">
                  <ul className="categories">
                    <li><a href="#">HTML <span>(62)</span></a></li>
                    <li><a href="#">Css <span>(27)</span></a></li>
                    <li><a href="#">Java Script <span>(41)</span></a></li>
                    <li><a href="#">Photoshop <span>(16)</span></a></li>
                    <li><a href="#">Wordpress <span>(55)</span></a></li>
                    <li><a href="#">VB <span>(07)</span></a></li>
                  </ul>
                </div>
              </div>
              {/* /Categories */}
              {/* Tags */}
              <div className="card tags-widget">
                <div className="card-header">
                  <h4 className="card-title">Tags</h4>
                </div>
                <div className="card-body">
                  <ul className="tags">
                    <li><a href="#" className="tag">HTML</a></li>
                    <li><a href="#" className="tag">Css</a></li>
                    <li><a href="#" className="tag">Java Script</a></li>
                    <li><a href="#" className="tag">Jquery</a></li>
                    <li><a href="#" className="tag">Wordpress</a></li>
                    <li><a href="#" className="tag">Php</a></li>
                    <li><a href="#" className="tag">Angular js</a></li>
                    <li><a href="#" className="tag">React js</a></li>
                    <li><a href="#" className="tag">Vue js</a></li>
                    <li><a href="#" className="tag">Photoshop</a></li>
                    <li><a href="#" className="tag">Ajax</a></li>
                    <li><a href="#" className="tag">Json</a></li>
                    <li><a href="#" className="tag">C</a></li>
                    <li><a href="#" className="tag">C++</a></li>
                    <li><a href="#" className="tag">Vb</a></li>
                    <li><a href="#" className="tag">Vb.net</a></li>
                    <li><a href="#" className="tag">Asp.net</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Content>
    </BasePage>
  )
}

export async function getStaticProps() {
  const { data } = await new ArticleApi().getAll();
  return {
    props: { articles: data },
    revalidate: 60
  }
}

export default Home