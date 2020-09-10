import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import BasePage from '@/components/layouts/BasePage';
import Header from '@/components/layouts/Header';
import Content from '@/components/layouts/Content';

import ArticleApi from '@/libs/api/articles';
import { xor } from 'lodash';

const ArticleDetail = ({ article }) => {
  return (
    <BasePage>
      <Header />
      <Content>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-view">
                <div className="blog blog-single-post">
                  {/* <div className="blog-image">
                    <a href="javascript:void(0);"><img alt src="assets/img/blog/blog-01.jpg" className="img-fluid" /></a>
                  </div> */}
                  <h3 className="blog-title">{article.title}</h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <a href="profile.html"><img src="/assets/img/user/user.jpg" alt="Post Author" /> <span>Marvin Downey</span></a>
                          </div>
                        </li>
                        <li><i className="far fa-calendar" />4 Dec 2019</li>
                        <li><i className="far fa-comments" />12 Comments</li>
                        <li><i className="fa fa-tags" />HTML</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>{article.content}</p>
                  </div>
                </div>
                <div className="card blog-share clearfix">
                  <div className="card-header">
                    <h4 className="card-title">Share the post</h4>
                  </div>
                  <div className="card-body">
                    <ul className="social-share">
                      <li><a href="#" title="Facebook"><i className="fab fa-facebook" /></a></li>
                      <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                      <li><a href="#" title="Google Plus"><i className="fab fa-google-plus" /></a></li>
                      <li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="card author-widget clearfix">
                  <div className="card-header">
                    <h4 className="card-title">About Author</h4>
                  </div>
                  <div className="card-body">
                    <div className="about-author">
                      <div className="about-author-img">
                        <div className="author-img-wrap">
                          <a href="profile.html"><img className="img-fluid rounded-circle" alt src="assets/img/user/user1.jpg" /></a>
                        </div>
                      </div>
                      <div className="author-details">
                        <a href="profile.html" className="blog-author-name">Darren Elder</a>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card blog-comments clearfix">
                  <div className="card-header">
                    <h4 className="card-title">Comments (12)</h4>
                  </div>
                  <div className="card-body pb-0">
                    <ul className="comments-list">
                      <li>
                        <div className="comment">
                          <div className="comment-author">
                            <img className="avatar" alt src="assets/img/user/user4.jpg" />
                          </div>
                          <div className="comment-block">
                            <span className="comment-by">
                              <span className="blog-author-name">Michelle Fairfax</span>
                            </span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="blog-date">Dec 6, 2017</p>
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                    </a>
                          </div>
                        </div>
                        <ul className="comments-list reply">
                          <li>
                            <div className="comment">
                              <div className="comment-author">
                                <img className="avatar" alt src="assets/img/user/user5.jpg" />
                              </div>
                              <div className="comment-block">
                                <span className="comment-by">
                                  <span className="blog-author-name">Gina Moore</span>
                                </span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                <p className="blog-date">Dec 6, 2017</p>
                                <a className="comment-btn" href="#">
                                  <i className="fas fa-reply" /> Reply
                        </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment">
                              <div className="comment-author">
                                <img className="avatar" alt src="assets/img/user/user3.jpg" />
                              </div>
                              <div className="comment-block">
                                <span className="comment-by">
                                  <span className="blog-author-name">Carl Kelly</span>
                                </span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                <p className="blog-date">December 7, 2017</p>
                                <a className="comment-btn" href="#">
                                  <i className="fas fa-reply" /> Reply
                        </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment">
                          <div className="comment-author">
                            <img className="avatar" alt src="assets/img/user/user6.jpg" />
                          </div>
                          <div className="comment-block">
                            <span className="comment-by">
                              <span className="blog-author-name">Elsie Gilley</span>
                            </span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="blog-date">December 11, 2017</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="comment">
                          <div className="comment-author">
                            <img className="avatar" alt src="assets/img/user/user7.jpg" />
                          </div>
                          <div className="comment-block">
                            <span className="comment-by">
                              <span className="blog-author-name">Joan Gardner</span>
                            </span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="blog-date">December 13, 2017</p>
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                    </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card new-comment clearfix">
                  <div className="card-header">
                    <h4 className="card-title">Leave Comment</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Your Email Address <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Comments</label>
                        <textarea rows={4} className="form-control" defaultValue={""} />
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn" type="submit">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              {/* Latest Posts */}
              <div className="card post-widget">
                <div className="card-header">
                  <h4 className="card-title">Latest Posts</h4>
                </div>
                <div className="card-body">
                  <ul className="latest-posts">
                    <li>
                      <div className="post-thumb">
                        <a href="blog-details.html">
                          <img className="img-fluid" src="assets/img/blog/blog-thumb-01.jpg" alt />
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
                          <img className="img-fluid" src="assets/img/blog/blog-thumb-02.jpg" alt />
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
                          <img className="img-fluid" src="assets/img/blog/blog-thumb-03.jpg" alt />
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
                          <img className="img-fluid" src="assets/img/blog/blog-thumb-04.jpg" alt />
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
                          <img className="img-fluid" src="assets/img/blog/blog-thumb-05.jpg" alt />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="blog-details.html">to generate Lorem Ipsum which looks reasonable.</a>
                        </h4>
                        <p>1 Dec 2019</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Latest Posts */}
              {/* Categories */}
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
              {/* /Tags */}
            </div>
            {/* /Blog Sidebar */}
          </div>
        </div>


      </Content>
    </BasePage>
  )
}

export async function getStaticPaths() {
  const { data } = await new ArticleApi().getAll();
  const paths = data.map(article => { return { params: { slug: article.slug } } });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await new ArticleApi().getBySlug(params.slug);
  return { props: { article: data }, revalidate: 60 }
}

export default ArticleDetail