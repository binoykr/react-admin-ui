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
              <img class="brand-icon" src="https://raw.githubusercontent.com/binoykr/react-admin-ui/master/public/imgs/user.jpg"
                alt="Brand Icon" />
              <span>
                admin ui
              </span>
            </a>
          </div>

          <ul class="nav-toolbar">
            <li class="nav-toolbar-item">
              <a id="nav-close-button" class="nav-dropitem-link" href="#">
                <i class="fa fa-bars"></i>
              </a>
            </li>
            <li class="nav-toolbar-item">
              <a class="nav-dropitem-link" href="#">
                <i class="fa fa-search"></i>
              </a>
            </li>
          </ul>

        </nav>

      </div>
    );
  }
}

export default Dashboard;