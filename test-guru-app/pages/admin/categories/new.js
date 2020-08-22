
import React, { useState } from 'react'

import BasePage from '@/components/layouts/admin/BasePage'
import Header from '@/components/layouts/admin/Header'
import PageWrapper from '@/components/layouts/admin/PageWrapper'
import PageHeader from '@/components/layouts/admin/PageHeader'
import SideBar from '@/components/layouts/admin/SideBar'

const CategoryNew = () => {
  const [setting, setSetting] = useState({
    template: false,
    value: undefined,
  })

  return (
    <BasePage>
      <Header />
      <SideBar />
      <PageWrapper>
        <PageHeader title="New Category" />

        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Custom Bootstrap Form Validation</h5>
                <p className="card-text">For custom Bootstrap form validation messages, you’ll need to add the <code>novalidate</code> boolean attribute to your form. For server side validation <a href="https://getbootstrap.com/docs/4.1/components/forms/#server-side" target="_blank">read full documentation</a>.</p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm">
                    <form className="needs-validation" noValidate>
                      <div className="form-row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="validationCustom01">First name</label>
                          <input type="text" className="form-control" id="validationCustom01" placeholder="First name" defaultValue="Mark" required />
                          <div className="valid-feedback">
                            Looks good!
                  </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="validationCustom02">Last name</label>
                          <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" defaultValue="Otto" required />
                          <div className="valid-feedback">
                            Looks good!
                  </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="validationCustomUsername">Username</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="inputGroupPrepend">@</span>
                            </div>
                            <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                              Please choose a username.
                    </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="validationCustom03">City</label>
                          <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
                          <div className="invalid-feedback">
                            Please provide a valid city.
                  </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <label htmlFor="validationCustom04">State</label>
                          <input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
                          <div className="invalid-feedback">
                            Please provide a valid state.
                  </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <label htmlFor="validationCustom05">Zip</label>
                          <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
                          <div className="invalid-feedback">
                            Please provide a valid zip.
                  </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                          <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                  </label>
                          <div className="invalid-feedback">
                            You must agree before submitting.
                  </div>
                        </div>
                      </div>
                      <button className="btn btn-primary" type="submit">Submit form</button>
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

export default CategoryNew