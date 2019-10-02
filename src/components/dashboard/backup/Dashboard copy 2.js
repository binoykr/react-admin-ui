import React from 'react';

import './Dashboard.css'

class Dashboard extends React.Component {


  render() {
    const childrens = React.Children.map(this.props.children, children =>
      React.cloneElement(children)
    );

    //https://getbootstrapadmin.com/remark/iconbar/index.html

    return (
      <div class="main-wrapper chiller-theme toggled">

        <nav class="topbar-navbar">
          <div class="topbar-brand">
            <a href="#">
              <img class="brand-icon" src="https://raw.githubusercontent.com/binoykr/react-admin-ui/new-dashboard/public/imgs/b-icon.png"
                alt="Brand Icon" />
              <span>
                admin ui
              </span>
            </a>
          </div>

          <div class="topbar-content">

            <ul class="nav-toolbar nav-left">
              <li class="nav-toolbar-item icon">
                <a id="nav-close-button" class="nav-dropitem-link icon" href="#">
                  <i class="fa fa-arrow-left"></i>
                </a>
              </li>
              <li class="nav-toolbar-item icon">
                <a class="nav-dropitem-link" href="#">
                  <i class="fa fa-search"></i>
                </a>
              </li>
            </ul>

            <ul class="nav-toolbar nav-right">
              <li class="nav-toolbar-item icon">
                <a class="nav-dropitem-link" href="#">
                  <i class="fa fa-bell"></i>
                  <span class="badge badge-pill badge-danger up">3</span>
                </a>
              </li>

              <li class="nav-toolbar-item icon">
                <a class="nav-dropitem-link" href="#">
                  <i class="fa fa-envelope"></i>
                  <span class="badge badge-pill badge-info up">5</span>
                </a>
              </li>

              <li class="nav-toolbar-item avatar">
                <a class="nav-dropitem-link" href="#">
                  <span>
                    Hi Binoy
                  </span>
                  <span class="avatar-online">
                    <img src="https://raw.githubusercontent.com/binoykr/react-admin-ui/new-dashboard/public/imgs/user-binoy.jpg"
                      alt="User picture" />
                    <i></i>
                  </span>
                </a>
                <div class="nav-toolbar-dropdown-menu menu-right">
                  <div class="dropdown-menu-header">
                    <h5>Notifications</h5>
                    <span class="badge badge-round badge-danger">New 5</span>
                  </div>
                  <div class="dropdown-menu-container">
                    <p>Content</p>
                  </div>
                  <div class="dropdown-menu-footer">
                    <p>Footer</p>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </nav>

      </div>
    );
  }
}

export default Dashboard;