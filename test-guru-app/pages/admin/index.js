
import React, { useCallback, useMemo, useState } from 'react'

import BasePage from '../../components/layouts/admin/BasePage'
import Header from '../../components/layouts/admin/Header'
import PageWrapper from '../../components/layouts/admin/PageWrapper'
import PageHeader from '../../components/layouts/admin/PageHeader'
import SideBar from '../../components/layouts/admin/SideBar'

import RichMarkDownEditor from "rich-markdown-editor";

class YoutubeEmbed extends React.Component {
  render() {
    const { attrs } = this.props;
    const videoId = attrs.matches[1];

    return (
      <p align="center">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
          width='640'
          height='480'
        />
      </p>
    );
  }
}

export default function Home() {
  const [setting, setSetting] = useState({
    readOnly: false,
    template: false,
    value: undefined,
  })

  const handleToggleTemplate = () => {
    setSetting({ template: !setting.template })
  };

  const handleUpdateValue = () => {
    const existing = "";
    const value = `${existing}\n\nedit!`;

    setSetting({ value })
  };

  return (
    <BasePage>
      <Header />
      <SideBar />
      <PageWrapper>
        <PageHeader title="Add Blog" />
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 blog-details">
                    <form>
                      <div className="form-group">
                        <label>Blog Name</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Blog Images</label>
                        <div>
                          <input className="form-control" type="file" />
                          <small className="form-text text-muted">Max. file size: 50 MB. Allowed images: jpg, gif, png. Maximum 10 images only.</small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Blog Category</label>
                            <select className="select select2-hidden-accessible form-control" tabIndex={-1} aria-hidden="true">
                              <option>Web Design</option>
                              <option>Web Development</option>
                              <option>App Development</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Blog Sub Category</label>
                            <select className="select select2-hidden-accessible form-control" tabIndex={-1} aria-hidden="true">
                              <option>Html</option>
                              <option>Css</option>
                              <option>Javascript</option>
                              <option>PHP</option>
                              <option>Codeignitor</option>
                              <option>iOS</option>
                              <option>Android</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Blog Description</label>

                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-12 blog-details">
                                <RichMarkDownEditor
                                  defaultValue="Hello world!"
                                  value={setting.value}
                                  template={setting.template}
                                  uploadImage={file => {
                                    console.log("File upload triggered: ", file);
                                    // Delay to simulate time taken to upload
                                    return new Promise(resolve => {
                                      setTimeout(
                                        () => resolve("https://loremflickr.com/1000/1000"),
                                        1500
                                      );
                                    });
                                  }}
                                  embeds={[
                                    {
                                      title: "YouTube",
                                      keywords: "youtube video tube google",
                                      icon: () => (
                                        <img
                                          src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg"
                                          width={24}
                                          height={24}
                                        />
                                      ),
                                      matcher: url => {
                                        return url.match(
                                          /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i
                                        );
                                      },
                                      component: YoutubeEmbed,
                                    },
                                  ]}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="form-group">
                        <label className="display-block w-100">Blog Status</label>
                        <div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input className="custom-control-input" id="active" name="active-blog" defaultValue="active" type="radio" defaultChecked />
                            <label className="custom-control-label" htmlFor="active">Active</label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input className="custom-control-input" id="inactive" name="active-blog" defaultValue="inactive" type="radio" />
                            <label className="custom-control-label" htmlFor="inactive">Inactive</label>
                          </div>
                        </div>
                      </div>
                      <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Publish Blog</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </PageWrapper>
    </BasePage>
  )
}
