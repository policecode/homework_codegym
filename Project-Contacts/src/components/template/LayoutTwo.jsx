export default function LayoutTwo() {

  return (
    <>
      <div className="sidebar sidebar-dark sidebar-fixed" id="sidebar">
        <div className="sidebar-brand d-none d-md-flex">
          <svg className="sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
            <use xlink:href="assets/brand/coreui.svg#full"></use>
          </svg>
          <svg className="sidebar-brand-narrow" width="46" height="46" alt="CoreUI Logo">
            <use xlink:href="assets/brand/coreui.svg#signet"></use>
          </svg>
        </div>
        <ul className="sidebar-nav" data-coreui="navigation" data-simplebar="">
          <li className="nav-item"><a className="nav-link" href="index.html">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-speedometer"></use>
            </svg> Dashboard<span className="badge badge-sm bg-info ms-auto">NEW</span></a></li>
          <li className="nav-title">Theme</li>
          <li className="nav-item"><a className="nav-link" href="colors.html">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-drop"></use>
            </svg> Colors</a></li>
          <li className="nav-item"><a className="nav-link" href="typography.html">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-pencil"></use>
            </svg> Typography</a></li>
          <li className="nav-title">Components</li>
          <li className="nav-group"><a className="nav-link nav-group-toggle" href="#">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-puzzle"></use>
            </svg> Base</a>
            <ul className="nav-group-items">
              <li className="nav-item"><a className="nav-link" href="base/accordion.html"><span className="nav-icon"></span> Accordion</a></li>
              <li className="nav-item"><a className="nav-link" href="base/breadcrumb.html"><span className="nav-icon"></span> Breadcrumb</a></li>
              <li className="nav-item"><a className="nav-link" href="base/cards.html"><span className="nav-icon"></span> Cards</a></li>
              <li className="nav-item"><a className="nav-link" href="base/carousel.html"><span className="nav-icon"></span> Carousel</a></li>
              <li className="nav-item"><a className="nav-link" href="base/collapse.html"><span className="nav-icon"></span> Collapse</a></li>
              <li className="nav-item"><a className="nav-link" href="base/list-group.html"><span className="nav-icon"></span> List group</a></li>
              <li className="nav-item"><a className="nav-link" href="base/navs-tabs.html"><span className="nav-icon"></span> Navs &amp; Tabs</a></li>
              <li className="nav-item"><a className="nav-link" href="base/pagination.html"><span className="nav-icon"></span> Pagination</a></li>
              <li className="nav-item"><a className="nav-link" href="base/placeholders.html"><span className="nav-icon"></span> Placeholders</a></li>
              <li className="nav-item"><a className="nav-link" href="base/popovers.html"><span className="nav-icon"></span> Popovers</a></li>
              <li className="nav-item"><a className="nav-link" href="base/progress.html"><span className="nav-icon"></span> Progress</a></li>
              <li className="nav-item"><a className="nav-link" href="base/scrollspy.html"><span className="nav-icon"></span> Scrollspy</a></li>
              <li className="nav-item"><a className="nav-link" href="base/spinners.html"><span className="nav-icon"></span> Spinners</a></li>
              <li className="nav-item"><a className="nav-link" href="base/tables.html"><span className="nav-icon"></span> Tables</a></li>
              <li className="nav-item"><a className="nav-link" href="base/tooltips.html"><span className="nav-icon"></span> Tooltips</a></li>
            </ul>
          </li>
          <li className="nav-group"><a className="nav-link nav-group-toggle" href="#">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-cursor"></use>
            </svg> Buttons</a>
            <ul className="nav-group-items">
              <li className="nav-item"><a className="nav-link" href="buttons/buttons.html"><span className="nav-icon"></span> Buttons</a></li>
              <li className="nav-item"><a className="nav-link" href="buttons/button-group.html"><span className="nav-icon"></span> Buttons Group</a></li>
              <li className="nav-item"><a className="nav-link" href="buttons/dropdowns.html"><span className="nav-icon"></span> Dropdowns</a></li>
            </ul>
          </li>
          <li className="nav-item"><a className="nav-link" href="charts.html">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-chart-pie"></use>
            </svg> Charts</a></li>
          <li className="nav-group"><a className="nav-link nav-group-toggle" href="#">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-notes"></use>
            </svg> Forms</a>
            <ul className="nav-group-items">
              <li className="nav-item"><a className="nav-link" href="forms/form-control.html"> Form Control</a></li>
              <li className="nav-item"><a className="nav-link" href="forms/select.html"> Select</a></li>
              <li className="nav-item"><a className="nav-link" href="forms/checks-radios.html"> Checks and radios</a></li>
              <li className="nav-item"><a className="nav-link" href="forms/range.html"> Range</a></li>
              <li className="nav-item"><a className="nav-link" href="forms/input-group.html"> Input group</a></li>
              <li className="nav-item"><a className="nav-link" href="forms/floating-labels.html"> Floating labels</a></li>
              <li className="nav-item"><a className="nav-link" href="forms/layout.html"> Layout</a></li>
              <li className="nav-item"><a className="nav-link" href="forms/validation.html"> Validation</a></li>
            </ul>
          </li>
          <li className="nav-group"><a className="nav-link nav-group-toggle" href="#">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-star"></use>
            </svg> Icons</a>
            <ul className="nav-group-items">
              <li className="nav-item"><a className="nav-link" href="icons/coreui-icons-free.html"> CoreUI Icons<span className="badge badge-sm bg-success ms-auto">Free</span></a></li>
              <li className="nav-item"><a className="nav-link" href="icons/coreui-icons-brand.html"> CoreUI Icons - Brand</a></li>
              <li className="nav-item"><a className="nav-link" href="icons/coreui-icons-flag.html"> CoreUI Icons - Flag</a></li>
            </ul>
          </li>
          <li className="nav-group"><a className="nav-link nav-group-toggle" href="#">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
            </svg> Notifications</a>
            <ul className="nav-group-items">
              <li className="nav-item"><a className="nav-link" href="notifications/alerts.html"><span className="nav-icon"></span> Alerts</a></li>
              <li className="nav-item"><a className="nav-link" href="notifications/badge.html"><span className="nav-icon"></span> Badge</a></li>
              <li className="nav-item"><a className="nav-link" href="notifications/modals.html"><span className="nav-icon"></span> Modals</a></li>
              <li className="nav-item"><a className="nav-link" href="notifications/toasts.html"><span className="nav-icon"></span> Toasts</a></li>
            </ul>
          </li>
          <li className="nav-item"><a className="nav-link" href="widgets.html">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-calculator"></use>
            </svg> Widgets<span className="badge badge-sm bg-info ms-auto">NEW</span></a></li>
          <li className="nav-divider"></li>
          <li className="nav-title">Extras</li>
          <li className="nav-group"><a className="nav-link nav-group-toggle" href="#">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-star"></use>
            </svg> Pages</a>
            <ul className="nav-group-items">
              <li className="nav-item"><a className="nav-link" href="login.html" target="_top">
                <svg className="nav-icon">
                  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-account-logout"></use>
                </svg> Login</a></li>
              <li className="nav-item"><a className="nav-link" href="register.html" target="_top">
                <svg className="nav-icon">
                  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-account-logout"></use>
                </svg> Register</a></li>
              <li className="nav-item"><a className="nav-link" href="404.html" target="_top">
                <svg className="nav-icon">
                  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bug"></use>
                </svg> Error 404</a></li>
              <li className="nav-item"><a className="nav-link" href="500.html" target="_top">
                <svg className="nav-icon">
                  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bug"></use>
                </svg> Error 500</a></li>
            </ul>
          </li>
          <li className="nav-item mt-auto"><a className="nav-link" href="https://coreui.io/docs/templates/installation/" target="_blank">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-description"></use>
            </svg> Docs</a></li>
          <li className="nav-item"><a className="nav-link nav-link-danger" href="https://coreui.io/pro/" target="_top">
            <svg className="nav-icon">
              <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-layers"></use>
            </svg> Try CoreUI
            <div className="fw-semibold">PRO</div>
          </a></li>
        </ul>
        <button className="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
      </div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <header className="header header-sticky mb-4">
          <div className="container-fluid">
            <button className="header-toggler px-md-0 me-md-3" type="button" onclick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()">
              <svg className="icon icon-lg">
                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
              </svg>
            </button><a className="header-brand d-md-none" href="#">
              <svg width="118" height="46" alt="CoreUI Logo">
                <use xlink:href="assets/brand/coreui.svg#full"></use>
              </svg></a>
            <ul className="header-nav d-none d-md-flex">
              <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
            </ul>
            <ul className="header-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">
                <svg className="icon icon-lg">
                  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
                </svg></a></li>
              <li className="nav-item"><a className="nav-link" href="#">
                <svg className="icon icon-lg">
                  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-list-rich"></use>
                </svg></a></li>
              <li className="nav-item"><a className="nav-link" href="#">
                <svg className="icon icon-lg">
                  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
                </svg></a></li>
            </ul>
            <ul className="header-nav ms-3">
              <li className="nav-item dropdown"><a className="nav-link py-0" data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <div className="avatar avatar-md">
                  <img sclassName="avatar-img" src="assets/img/avatars/8.jpg" alt="user@email.com" />
                </div>
              </a>
                <div className="dropdown-menu dropdown-menu-end pt-0">
                  <div className="dropdown-header bg-light py-2">
                    <div className="fw-semibold">Account</div>
                  </div><a className="dropdown-item" href="#">
                    <svg className="icon me-2">
                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
                    </svg> Updates<span className="badge badge-sm bg-info ms-2">42</span></a><a className="dropdown-item" href="#">
                    <svg className="icon me-2">
                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
                    </svg> Messages<span className="badge badge-sm bg-success ms-2">42</span></a><a className="dropdown-item" href="#">
                    <svg className="icon me-2">
                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-task"></use>
                    </svg> Tasks<span className="badge badge-sm bg-danger ms-2">42</span></a><a className="dropdown-item" href="#">
                    <svg className="icon me-2">
                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-comment-square"></use>
                    </svg> Comments<span className="badge badge-sm bg-warning ms-2">42</span></a>
                  <div className="dropdown-header bg-light py-2">
                    <div className="fw-semibold">Settings</div>
                  </div><a className="dropdown-item" href="#">
                    <svg className="icon me-2">
                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
                    </svg> Profile</a><a className="dropdown-item" href="#">
                    <svg className="icon me-2">
                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-settings"></use>
                    </svg> Settings</a><a className="dropdown-item" href="#">
                    <svg className="icon me-2">
                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-credit-card"></use>
                    </svg> Payments<span className="badge badge-sm bg-secondary ms-2">42</span></a><a className="dropdown-item" href="#">
                    <svg className="icon me-2">
                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-file"></use>
                    </svg> Projects<span className="badge badge-sm bg-primary ms-2">42</span></a>
                  <div className="dropdown-divider"></div><a className="dropdown-item" href="#">
                    <svg className="icon me-2">
                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
                    </svg> Lock Account</a><a className="dropdown-item" href="#">
                    <svg className="icon me-2">
                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-account-logout"></use>
                    </svg> Logout</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-divider"></div>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb my-0 ms-2">
                <li className="breadcrumb-item">
                  <span>Home</span>
                </li>
                <li className="breadcrumb-item active"><span>Dashboard</span></li>
              </ol>
            </nav>
          </div>
        </header>
        <div className="body flex-grow-1 px-3">
          <div className="container-lg">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="card mb-4 text-white bg-primary">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fs-4 fw-semibold">26K <span className="fs-6 fw-normal">(-12.4%
                        <svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-arrow-bottom"></use>
                        </svg>)</span></div>
                      <div>Users</div>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-transparent text-white p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                        </svg>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a></div>
                    </div>
                  </div>
                  <div className="c-chart-wrapper mt-3 mx-3" style="height:70px;">
                    <canvas className="chart" id="card-chart1" height="70"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card mb-4 text-white bg-info">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fs-4 fw-semibold">$6.200 <span className="fs-6 fw-normal">(40.9%
                        <svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-arrow-top"></use>
                        </svg>)</span></div>
                      <div>Income</div>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-transparent text-white p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                        </svg>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a></div>
                    </div>
                  </div>
                  <div className="c-chart-wrapper mt-3 mx-3" style="height:70px;">
                    <canvas className="chart" id="card-chart2" height="70"></canvas>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="card mb-4 text-white bg-warning">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fs-4 fw-semibold">2.49% <span className="fs-6 fw-normal">(84.7%
                        <svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-arrow-top"></use>
                        </svg>)</span></div>
                      <div>Conversion Rate</div>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-transparent text-white p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                        </svg>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a></div>
                    </div>
                  </div>
                  <div className="c-chart-wrapper mt-3" style="height:70px;">
                    <canvas className="chart" id="card-chart3" height="70"></canvas>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="card mb-4 text-white bg-danger">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fs-4 fw-semibold">44K <span className="fs-6 fw-normal">(-23.6%
                        <svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-arrow-bottom"></use>
                        </svg>)</span></div>
                      <div>Sessions</div>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-transparent text-white p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                        </svg>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a></div>
                    </div>
                  </div>
                  <div className="c-chart-wrapper mt-3 mx-3" style="height:70px;">
                    <canvas className="chart" id="card-chart4" height="70"></canvas>
                  </div>
                </div>
              </div>

            </div>

            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h4 className="card-title mb-0">Traffic</h4>
                    <div className="small text-medium-emphasis">January - July 2022</div>
                  </div>
                  <div className="btn-toolbar d-none d-md-block" role="toolbar" aria-label="Toolbar with buttons">
                    <div className="btn-group btn-group-toggle mx-3" data-coreui-toggle="buttons">
                      <input className="btn-check" id="option1" type="radio" name="options" autocomplete="off" />
                      <label className="btn btn-outline-secondary"> Day</label>
                      <input className="btn-check" id="option2" type="radio" name="options" autocomplete="off" checked="" />
                      <label className="btn btn-outline-secondary active"> Month</label>
                      <input className="btn-check" id="option3" type="radio" name="options" autocomplete="off" />
                      <label className="btn btn-outline-secondary"> Year</label>
                    </div>
                    <button className="btn btn-primary" type="button">
                      <svg className="icon">
                        <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-cloud-download"></use>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="c-chart-wrapper" style="height:300px;margin-top:40px;">
                  <canvas className="chart" id="main-chart" height="300"></canvas>
                </div>
              </div>
              <div className="card-footer">
                <div className="row row-cols-1 row-cols-md-5 text-center">
                  <div className="col mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Visits</div>
                    <div className="fw-semibold">29.703 Users (40%)</div>
                    <div className="progress progress-thin mt-2">
                      <div className="progress-bar bg-success" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="col mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Unique</div>
                    <div className="fw-semibold">24.093 Users (20%)</div>
                    <div className="progress progress-thin mt-2">
                      <div className="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="col mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Pageviews</div>
                    <div className="fw-semibold">78.706 Views (60%)</div>
                    <div className="progress progress-thin mt-2">
                      <div className="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="col mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">New Users</div>
                    <div className="fw-semibold">22.123 Users (80%)</div>
                    <div className="progress progress-thin mt-2">
                      <div className="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="col mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Bounce Rate</div>
                    <div className="fw-semibold">40.15%</div>
                    <div className="progress progress-thin mt-2">
                      <div className="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="card mb-4" style="--cui-card-cap-bg: #3b5998">
                  <div className="card-header position-relative d-flex justify-content-center align-items-center">
                    <svg className="icon icon-3xl text-white my-4">
                      <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-facebook-f"></use>
                    </svg>
                    <div className="chart-wrapper position-absolute top-0 start-0 w-100 h-100">
                      <canvas id="social-box-chart-1" height="90"></canvas>
                    </div>
                  </div>
                  <div className="card-body row text-center">
                    <div className="col">
                      <div className="fs-5 fw-semibold">89k</div>
                      <div className="text-uppercase text-medium-emphasis small">friends</div>
                    </div>
                    <div className="vr"></div>
                    <div className="col">
                      <div className="fs-5 fw-semibold">459</div>
                      <div className="text-uppercase text-medium-emphasis small">feeds</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="card mb-4" style="--cui-card-cap-bg: #00aced">
                  <div className="card-header position-relative d-flex justify-content-center align-items-center">
                    <svg className="icon icon-3xl text-white my-4">
                      <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-twitter"></use>
                    </svg>
                    <div className="chart-wrapper position-absolute top-0 start-0 w-100 h-100">
                      <canvas id="social-box-chart-2" height="90"></canvas>
                    </div>
                  </div>
                  <div className="card-body row text-center">
                    <div className="col">
                      <div className="fs-5 fw-semibold">973k</div>
                      <div className="text-uppercase text-medium-emphasis small">followers</div>
                    </div>
                    <div className="vr"></div>
                    <div className="col">
                      <div className="fs-5 fw-semibold">1.792</div>
                      <div className="text-uppercase text-medium-emphasis small">tweets</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="card mb-4" style="--cui-card-cap-bg: #4875b4">
                  <div className="card-header position-relative d-flex justify-content-center align-items-center">
                    <svg className="icon icon-3xl text-white my-4">
                      <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-linkedin"></use>
                    </svg>
                    <div className="chart-wrapper position-absolute top-0 start-0 w-100 h-100">
                      <canvas id="social-box-chart-3" height="90"></canvas>
                    </div>
                  </div>
                  <div className="card-body row text-center">
                    <div className="col">
                      <div className="fs-5 fw-semibold">500+</div>
                      <div className="text-uppercase text-medium-emphasis small">contacts</div>
                    </div>
                    <div className="vr"></div>
                    <div className="col">
                      <div className="fs-5 fw-semibold">292</div>
                      <div className="text-uppercase text-medium-emphasis small">feeds</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  <div className="card-header">Traffic &amp; Sales</div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-6">
                            <div className="border-start border-start-4 border-start-info px-3 mb-3"><small className="text-medium-emphasis">New Clients</small>
                              <div className="fs-5 fw-semibold">9.123</div>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="border-start border-start-4 border-start-danger px-3 mb-3"><small className="text-medium-emphasis">Recuring Clients</small>
                              <div className="fs-5 fw-semibold">22.643</div>
                            </div>
                          </div>

                        </div>

                        <hr className="mt-0" />
                          <div className="progress-group mb-4">
                            <div className="progress-group-prepend"><span className="text-medium-emphasis small">Monday</span></div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-info" role="progressbar" style="width: 34%" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-danger" role="progressbar" style="width: 78%" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-group mb-4">
                            <div className="progress-group-prepend"><span className="text-medium-emphasis small">Tuesday</span></div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-info" role="progressbar" style="width: 56%" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-danger" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-group mb-4">
                            <div className="progress-group-prepend"><span className="text-medium-emphasis small">Wednesday</span></div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-info" role="progressbar" style="width: 12%" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-danger" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-group mb-4">
                            <div className="progress-group-prepend"><span className="text-medium-emphasis small">Thursday</span></div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-info" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-danger" role="progressbar" style="width: 91%" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-group mb-4">
                            <div className="progress-group-prepend"><span className="text-medium-emphasis small">Friday</span></div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-info" role="progressbar" style="width: 22%" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-danger" role="progressbar" style="width: 73%" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-group mb-4">
                            <div className="progress-group-prepend"><span className="text-medium-emphasis small">Saturday</span></div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-info" role="progressbar" style="width: 53%" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-danger" role="progressbar" style="width: 82%" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-group mb-4">
                            <div className="progress-group-prepend"><span className="text-medium-emphasis small">Sunday</span></div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-info" role="progressbar" style="width: 9%" aria-valuenow="9" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-danger" role="progressbar" style="width: 69%" aria-valuenow="69" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-6">
                            <div className="border-start border-start-4 border-start-warning px-3 mb-3"><small className="text-medium-emphasis">Pageviews</small>
                              <div className="fs-5 fw-semibold">78.623</div>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="border-start border-start-4 border-start-success px-3 mb-3"><small className="text-medium-emphasis">Organic</small>
                              <div className="fs-5 fw-semibold">49.123</div>
                            </div>
                          </div>

                        </div>

                        <hr className="mt-0" />
                          <div className="progress-group">
                            <div className="progress-group-header">
                              <svg className="icon icon-lg me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
                              </svg>
                              <div>Male</div>
                              <div className="ms-auto fw-semibold">43%</div>
                            </div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-warning" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-group mb-5">
                            <div className="progress-group-header">
                              <svg className="icon icon-lg me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user-female"></use>
                              </svg>
                              <div>Female</div>
                              <div className="ms-auto fw-semibold">37%</div>
                            </div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-warning" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-group">
                            <div className="progress-group-header">
                              <svg className="icon icon-lg me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-google"></use>
                              </svg>
                              <div>Organic Search</div>
                              <div className="ms-auto fw-semibold me-2">191.235</div>
                              <div className="text-medium-emphasis small">(56%)</div>
                            </div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-success" role="progressbar" style="width: 56%" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-group">
                            <div className="progress-group-header">
                              <svg className="icon icon-lg me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-facebook-f"></use>
                              </svg>
                              <div>Facebook</div>
                              <div className="ms-auto fw-semibold me-2">51.223</div>
                              <div className="text-medium-emphasis small">(15%)</div>
                            </div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-success" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-group">
                            <div className="progress-group-header">
                              <svg className="icon icon-lg me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-twitter"></use>
                              </svg>
                              <div>Twitter</div>
                              <div className="ms-auto fw-semibold me-2">37.564</div>
                              <div className="text-medium-emphasis small">(11%)</div>
                            </div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-success" role="progressbar" style="width: 11%" aria-valuenow="11" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div className="progress-group">
                            <div className="progress-group-header">
                              <svg className="icon icon-lg me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-linkedin"></use>
                              </svg>
                              <div>LinkedIn</div>
                              <div className="ms-auto fw-semibold me-2">27.319</div>
                              <div className="text-medium-emphasis small">(8%)</div>
                            </div>
                            <div className="progress-group-bars">
                              <div className="progress progress-thin">
                                <div className="progress-bar bg-success" role="progressbar" style="width: 8%" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                      </div>

                    </div>
                    <br />
                      <div className="table-responsive">
                        <table className="table border mb-0">
                          <thead className="table-light fw-semibold">
                            <tr className="align-middle">
                              <th className="text-center">
                                <svg className="icon">
                                  <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-people"></use>
                                </svg>
                              </th>
                              <th>User</th>
                              <th className="text-center">Country</th>
                              <th>Usage</th>
                              <th className="text-center">Payment Method</th>
                              <th>Activity</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="align-middle">
                              <td className="text-center">
                                <div className="avatar avatar-md">
                                  <img className="avatar-img" src="assets/img/avatars/1.jpg" alt="user@email.com" />
                                  <span className="avatar-status bg-success"></span>
                                </div>
                              </td>
                              <td>
                                <div>Yiorgos Avraamu</div>
                                <div className="small text-medium-emphasis"><span>New</span> | Registered: Jan 1, 2020</div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/flag.svg#cif-us"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-start">
                                    <div className="fw-semibold">50%</div>
                                  </div>
                                  <div className="float-end"><small className="text-medium-emphasis">Jun 11, 2020 - Jul 10, 2020</small></div>
                                </div>
                                <div className="progress progress-thin">
                                  <div className="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-cc-mastercard"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="small text-medium-emphasis">Last login</div>
                                <div className="fw-semibold">10 sec ago</div>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button className="btn btn-transparent p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg className="icon">
                                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                                    </svg>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Info</a><a className="dropdown-item" href="#">Edit</a><a className="dropdown-item text-danger" href="#">Delete</a></div>
                                </div>
                              </td>
                            </tr>
                            <tr className="align-middle">
                              <td className="text-center">
                                <div className="avatar avatar-md">
                                  <img className="avatar-img" src="assets/img/avatars/2.jpg" alt="user@email.com" />
                                  <span className="avatar-status bg-danger"></span>
                                </div>
                              </td>
                              <td>
                                <div>Avram Tarasios</div>
                                <div className="small text-medium-emphasis"><span>Recurring</span> | Registered: Jan 1, 2020</div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/flag.svg#cif-br"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-start">
                                    <div className="fw-semibold">10%</div>
                                  </div>
                                  <div className="float-end"><small className="text-medium-emphasis">Jun 11, 2020 - Jul 10, 2020</small></div>
                                </div>
                                <div className="progress progress-thin">
                                  <div className="progress-bar bg-info" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-cc-visa"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="small text-medium-emphasis">Last login</div>
                                <div className="fw-semibold">5 minutes ago</div>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button className="btn btn-transparent p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg className="icon">
                                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                                    </svg>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Info</a><a className="dropdown-item" href="#">Edit</a><a className="dropdown-item text-danger" href="#">Delete</a></div>
                                </div>
                              </td>
                            </tr>
                            <tr className="align-middle">
                              <td className="text-center">
                                <div className="avatar avatar-md">
                                  <img className="avatar-img" src="assets/img/avatars/3.jpg" alt="user@email.com" />
                                  <span className="avatar-status bg-warning"></span>
                                </div>
                              </td>
                              <td>
                                <div>Quintin Ed</div>
                                <div className="small text-medium-emphasis"><span>New</span> | Registered: Jan 1, 2020</div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/flag.svg#cif-in"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-start">
                                    <div className="fw-semibold">74%</div>
                                  </div>
                                  <div className="float-end"><small className="text-medium-emphasis">Jun 11, 2020 - Jul 10, 2020</small></div>
                                </div>
                                <div className="progress progress-thin">
                                  <div className="progress-bar bg-warning" role="progressbar" style="width: 74%" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-cc-stripe"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="small text-medium-emphasis">Last login</div>
                                <div className="fw-semibold">1 hour ago</div>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button className="btn btn-transparent p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg className="icon">
                                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                                    </svg>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Info</a><a className="dropdown-item" href="#">Edit</a><a className="dropdown-item text-danger" href="#">Delete</a></div>
                                </div>
                              </td>
                            </tr>
                            <tr className="align-middle">
                              <td className="text-center">
                                <div className="avatar avatar-md">
                                  <img className="avatar-img" src="assets/img/avatars/4.jpg" alt="user@email.com" />
                                  <span className="avatar-status bg-secondary"></span>
                                </div>
                              </td>
                              <td>
                                <div>Enéas Kwadwo</div>
                                <div className="small text-medium-emphasis"><span>New</span> | Registered: Jan 1, 2020</div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/flag.svg#cif-fr"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-start">
                                    <div className="fw-semibold">98%</div>
                                  </div>
                                  <div className="float-end"><small className="text-medium-emphasis">Jun 11, 2020 - Jul 10, 2020</small></div>
                                </div>
                                <div className="progress progress-thin">
                                  <div className="progress-bar bg-danger" role="progressbar" style="width: 98%" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-cc-paypal"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="small text-medium-emphasis">Last login</div>
                                <div className="fw-semibold">Last month</div>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button className="btn btn-transparent p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg className="icon">
                                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                                    </svg>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Info</a><a className="dropdown-item" href="#">Edit</a><a className="dropdown-item text-danger" href="#">Delete</a></div>
                                </div>
                              </td>
                            </tr>
                            <tr className="align-middle">
                              <td className="text-center">
                                <div className="avatar avatar-md">
                                  <img className="avatar-img" src="assets/img/avatars/5.jpg" alt="user@email.com" />
                                  <span className="avatar-status bg-success"></span>
                                </div>
                              </td>
                              <td>
                                <div>Agapetus Tadeáš</div>
                                <div className="small text-medium-emphasis"><span>New</span> | Registered: Jan 1, 2020</div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/flag.svg#cif-es"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-start">
                                    <div className="fw-semibold">22%</div>
                                  </div>
                                  <div className="float-end"><small className="text-medium-emphasis">Jun 11, 2020 - Jul 10, 2020</small></div>
                                </div>
                                <div className="progress progress-thin">
                                  <div className="progress-bar bg-info" role="progressbar" style="width: 22%" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-cc-apple-pay"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="small text-medium-emphasis">Last login</div>
                                <div className="fw-semibold">Last week</div>
                              </td>
                              <td>
                                <div className="dropdown dropup">
                                  <button className="btn btn-transparent p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg className="icon">
                                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                                    </svg>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Info</a><a className="dropdown-item" href="#">Edit</a><a className="dropdown-item text-danger" href="#">Delete</a></div>
                                </div>
                              </td>
                            </tr>
                            <tr className="align-middle">
                              <td className="text-center">
                                <div className="avatar avatar-md">
                                  <img className="avatar-img" src="assets/img/avatars/6.jpg" alt="user@email.com" />
                                  <span className="avatar-status bg-danger"></span>
                                </div>
                              </td>
                              <td>
                                <div>Friderik Dávid</div>
                                <div className="small text-medium-emphasis"><span>New</span> | Registered: Jan 1, 2020</div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/flag.svg#cif-pl"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-start">
                                    <div className="fw-semibold">43%</div>
                                  </div>
                                  <div className="float-end"><small className="text-medium-emphasis">Jun 11, 2020 - Jul 10, 2020</small></div>
                                </div>
                                <div className="progress progress-thin">
                                  <div className="progress-bar bg-success" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td className="text-center">
                                <svg className="icon icon-xl">
                                  <use xlink:href="vendors/@coreui/icons/svg/brand.svg#cib-cc-amex"></use>
                                </svg>
                              </td>
                              <td>
                                <div className="small text-medium-emphasis">Last login</div>
                                <div className="fw-semibold">Yesterday</div>
                              </td>
                              <td>
                                <div className="dropdown dropup">
                                  <button className="btn btn-transparent p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg className="icon">
                                      <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                                    </svg>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Info</a><a className="dropdown-item" href="#">Edit</a><a className="dropdown-item text-danger" href="#">Delete</a></div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div><a href="https://coreui.io">CoreUI </a><a href="https://coreui.io">Bootstrap Admin Template</a> © 2022 creativeLabs.</div>
          <div className="ms-auto">Powered by&nbsp;<a href="https://coreui.io/docs/">CoreUI UI Components</a></div>
        </footer>
      </div>
    </>
  )
}