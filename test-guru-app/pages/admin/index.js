import BasePage from '../../components/layouts/admin/BasePage';
import Header from '../../components/layouts/admin/Header';
import PageWrapper from '../../components/layouts/admin/PageWrapper';
import PageHeader from '../../components/layouts/admin/PageHeader';
import SideBar from '../../components/layouts/admin/SideBar';

export default function Home() {
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
                        <textarea cols={30} rows={6} className="form-control" defaultValue={""} />
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
