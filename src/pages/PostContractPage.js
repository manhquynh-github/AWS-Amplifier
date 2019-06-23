import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/themify-icons.css';
import '../assets/css/metisMenu.css';
// import '../assets/css/owl.carousel.min.css';
import '../assets/css/slicknav.min.css';
import '../assets/css/typography.css';
import '../assets/css/default-css.css';
import '../assets/css/styles.css';
import '../assets/css/responsive.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class PostContractPage extends Component {
  constructor() {
    super();
    this.state = {
      ...this.props,
    };
    this.onProduceNameChanged = this.onProduceNameChanged.bind(this);
    this.onStandardRequiredChanged = this.onStandardRequiredChanged.bind(this);
    this.onQuantityChanged = this.onQuantityChanged.bind(this);
    this.onCityChanged = this.onCityChanged.bind(this);
    this.onExpectedShipmentDateChanged = this.onExpectedShipmentDateChanged.bind(
      this
    );
    this.onStartingPriceChanged = this.onStartingPriceChanged.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  static defaultProps = {
    produceName: '',
    standardRequired: '',
    quantity: '',
    city: '',
    expectedShipmentDate: '',
    startingPrice: '',
  };

  onProduceNameChanged(e) {
    this.setState({
      produceName: e.target.value,
    });
  }

  onStandardRequiredChanged(e) {
    this.setState({
      standardRequired: e.target.value,
    });
  }

  onQuantityChanged(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  onCityChanged(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onExpectedShipmentDateChanged(e) {
    this.setState({
      expectedShipmentDate: e.target.value,
    });
  }

  onStartingPriceChanged(e) {
    this.setState({
      startingPrice: e.target.value,
    });
  }

  onSubmitClick() {
    this.props.history.push({
      pathname: `/`,
      state: {
        session: {
          ...this.props.location.state.session,
          ...this.state,
        },
      },
    });
  }

  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Form - srtdash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* modernizr css */}
        {/*[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]*/}
        {/* page container area start */}
        {/* main content area start */}
        <div className="main-content">
          {/* header area start */}
          <div className="header-area">
            <div className="row align-items-center">
              {/* nav and search button */}
              <div className="col-md-6 col-sm-8 clearfix">
                <div className="nav-btn pull-left">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="search-box pull-left">
                  <form action="#">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search..."
                      required
                    />
                    <i className="ti-search" />
                  </form>
                </div>
              </div>
              {/* profile info & task notification */}
              <div className="col-md-6 col-sm-4 clearfix">
                <ul className="notification-area pull-right">
                  <li id="full-view">
                    <i className="ti-fullscreen" />
                  </li>
                  <li id="full-view-exit">
                    <i className="ti-zoom-out" />
                  </li>
                  <li className="dropdown">
                    <i
                      className="ti-bell dropdown-toggle"
                      data-toggle="dropdown">
                      <span>2</span>
                    </i>
                    <div className="dropdown-menu bell-notify-box notify-box">
                      <span className="notify-title">
                        You have 3 new notifications <a href="#">view all</a>
                      </span>
                      <div className="nofity-list">
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-key btn-danger" />
                          </div>
                          <div className="notify-text">
                            <p>You have Changed Your Password</p>
                            <span>Just Now</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-comments-smiley btn-info" />
                          </div>
                          <div className="notify-text">
                            <p>New Commetns On Post</p>
                            <span>30 Seconds ago</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-key btn-primary" />
                          </div>
                          <div className="notify-text">
                            <p>Some special like you</p>
                            <span>Just Now</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-comments-smiley btn-info" />
                          </div>
                          <div className="notify-text">
                            <p>New Commetns On Post</p>
                            <span>30 Seconds ago</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-key btn-primary" />
                          </div>
                          <div className="notify-text">
                            <p>Some special like you</p>
                            <span>Just Now</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-key btn-danger" />
                          </div>
                          <div className="notify-text">
                            <p>You have Changed Your Password</p>
                            <span>Just Now</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-key btn-danger" />
                          </div>
                          <div className="notify-text">
                            <p>You have Changed Your Password</p>
                            <span>Just Now</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <i
                      className="fa fa-envelope-o dropdown-toggle"
                      data-toggle="dropdown">
                      <span>3</span>
                    </i>
                    <div className="dropdown-menu notify-box nt-enveloper-box">
                      <span className="notify-title">
                        You have 3 new notifications <a href="#">view all</a>
                      </span>
                      <div className="nofity-list">
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <img
                              src={require('../assets/images/author/author-img1.jpg')}
                              alt="image"
                            />
                          </div>
                          <div className="notify-text">
                            <p>Aglae Mayer</p>
                            <span className="msg">
                              Hey I am waiting for you...
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <img
                              src={require('../assets/images/author/author-img2.jpg')}
                              alt="image"
                            />
                          </div>
                          <div className="notify-text">
                            <p>Aglae Mayer</p>
                            <span className="msg">
                              When you can connect with me...
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <img
                              src={require('../assets/images/author/author-img3.jpg')}
                              alt="image"
                            />
                          </div>
                          <div className="notify-text">
                            <p>Aglae Mayer</p>
                            <span className="msg">I missed you so much...</span>
                            <span>3:15 PM</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <img
                              src={require('../assets/images/author/author-img4.jpg')}
                              alt="image"
                            />
                          </div>
                          <div className="notify-text">
                            <p>Aglae Mayer</p>
                            <span className="msg">
                              Your product is completely Ready...
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <img
                              src={require('../assets/images/author/author-img2.jpg')}
                              alt="image"
                            />
                          </div>
                          <div className="notify-text">
                            <p>Aglae Mayer</p>
                            <span className="msg">
                              Hey I am waiting for you...
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <img
                              src={require('../assets/images/author/author-img1.jpg')}
                              alt="image"
                            />
                          </div>
                          <div className="notify-text">
                            <p>Aglae Mayer</p>
                            <span className="msg">
                              Hey I am waiting for you...
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <img
                              src={require('../assets/images/author/author-img3.jpg')}
                              alt="image"
                            />
                          </div>
                          <div className="notify-text">
                            <p>Aglae Mayer</p>
                            <span className="msg">
                              Hey I am waiting for you...
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="settings-btn">
                    <i className="ti-settings" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* header area end */}
          {/* page title area start */}
          <div className="page-title-area">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="breadcrumbs-area clearfix">
                  <h4 className="page-title pull-left">Entrepreneur</h4>
                  <ul className="breadcrumbs pull-left">
                    <li>
                      <Link
                        to={{
                          pathname: '/',
                          state: {
                            session: {
                              ...this.props.location.state.session,
                            },
                          },
                        }}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <span>New Contract</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 clearfix">
                <div className="user-profile pull-right">
                  <img
                    className="avatar user-thumb"
                    src={require('../assets/images/author/avatar.png')}
                    alt="avatar"
                  />
                  <h4
                    className="user-name dropdown-toggle"
                    data-toggle="dropdown">
                    <Link
                      style={{ color: 'white' }}
                      to={{
                        pathname: '/account',
                        state: {
                          session: {
                            ...this.props.location.state.session,
                          },
                        },
                      }}>
                      Company Rai
                    </Link>
                    <i className="fa fa-angle-down" />
                  </h4>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Message
                    </a>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* page title area end */}
          <div className="main-content-inner">
            <div className="row">
              <div className="col-lg-6 col-ml-12">
                <div className="row">
                  {/* Server side start */}
                  <div className="col-12">
                    <div className="card mt-5">
                      <div className="card-body">
                        <h4 className="header-title">
                          New Contract from Entrepreneur
                        </h4>
                        <form className="needs-validation" noValidate>
                          <div className="form-row">
                            <div className="col-md-4 mb-3">
                              <label htmlFor="validationCustom01">
                                Produce Name
                              </label>
                              <input
                                onChange={this.onProduceNameChanged}
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Example: Bananna"
                                required
                              />
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label htmlFor="validationCustom02">
                                Standard Required
                              </label>
                              <input
                                onChange={this.onStandardRequiredChanged}
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                placeholder="Example: VietGAP, GlobalGAP,.."
                                required
                              />
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label htmlFor="validationCustomUsername">
                                Quantity
                              </label>
                              <div className="input-group">
                                <input
                                  onChange={this.onQuantityChanged}
                                  type="text"
                                  className="form-control"
                                  id="validationCustomUsername"
                                  placeholder="1000 tons"
                                  aria-describedby="inputGroupPrepend"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter quantity.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom03">City</label>
                              <input
                                onChange={this.onCityChanged}
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="City"
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid city.
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label htmlFor="validationCustom04">
                                Expected Shipment Date
                              </label>
                              <input
                                onChange={this.onExpectedShipmentDateChanged}
                                type="text"
                                className="form-control"
                                id="validationCustom04"
                                placeholder="ex: 06/24/2019"
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid date.
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label htmlFor="validationCustom04">
                                Starting price
                              </label>
                              <input
                                onChange={this.onStartingPriceChanged}
                                type="text"
                                className="form-control"
                                placeholder="ex: $1000"
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid price.
                              </div>
                            </div>
                          </div>
                          <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={this.onSubmitClick}>
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Server side end */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* main content area end */}
        {/* footer area start*/}
        <footer>
          <div className="footer-area">
            <p>© Copyright 2019. All right reserved. Template by CloudFarm.</p>
          </div>
        </footer>
        {/* footer area end*/}
        {/* page container area end */}
        {/* jquery latest version */}
        {/* bootstrap 4 js */}
        {/* others plugins */}
      </div>
    );
  }
}

export default withRouter(PostContractPage);
