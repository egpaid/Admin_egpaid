import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="EGPAID Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
            {/* <span className="brand-text font-weight-light">AdminLTE 3</span> */}
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex"> */}
            <div className="image">
              {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /> */}
              {/* <img className="img-circle elevation-2" src="https://scontent.fbho3-2.fna.fbcdn.net/v/t1.6435-9/117838581_173023391004342_2397247256428269740_n.png?_nc_cat=111&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=yU594gYLAZYAX_awqB4&tn=ZOyyBxRedVmnvgMp&_nc_ht=scontent.fbho3-2.fna&oh=00_AT_X9s5pNUOsw6aZ3vzwgmSo91LHzBRxGzAeljs5Mhl4OA&oe=62A96FE5" alt="new"/> */}
            </div>
            {/* <div className="info">
          <a href="#" className="d-block">Alexander Pierce</a>
        </div>
      </div> */}
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>

                </li>
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                      Member
                      {/* <span className="right badge badge-danger">New</span> */}
                    </p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-copy" />
                    <p>
                      Employee
                      <i className="fas fa-angle-left right" />
                      {/* <span className="badge badge-info right">6</span> */}
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                      E-Commerce
                      {/* <span className="right badge badge-danger">New</span> */}
                    </p>
                  </a>
                </li>


                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                      Smart Collection
                      {/* <span className="right badge badge-danger">New</span> */}
                    </p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-copy" />
                    <p>
                      Payout
                      <i className="fas fa-angle-left right" />
                      {/* <span className="badge badge-info right">6</span> */}
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                      Recharge and Bill Pay
                      {/* <span className="right badge badge-danger">New</span> */}
                    </p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-copy" />
                    <p>
                      Setting
                      <i className="fas fa-angle-left right" />
                      {/* <span className="badge badge-info right">6</span> */}
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                      Accounting
                      {/* <span className="right badge badge-danger">New</span> */}
                    </p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-copy" />
                    <p>
                      Support
                      <i className="fas fa-angle-left right" />
                      {/* <span className="badge badge-info right">6</span> */}
                    </p>
                  </a>
                </li>

              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>

    )
  }
}
