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

        <nav class="navbar top size">

          <div class="brand">
            <a href="#">
              <img class="icon" src="https://raw.githubusercontent.com/binoykr/react-admin-ui/new-dashboard/public/imgs/b-icon.png"
                alt="Brand Icon" />
              <span>
                admin ui
              </span>
            </a>
          </div>

          <div class="content">

            <ul class="items left size">
              <li class="item size icon">
                <a id="navbar-top-close-button" class="nav-link icon" href="#">
                  <i class="fa fa-arrow-left"></i>
                </a>
              </li>
              <li class="item size icon">
                <a class="nav-link" href="#">
                  <i class="fa fa-search"></i>
                </a>
              </li>
            </ul>

            <ul class="items right size">
              <li class="item size icon">
                <a class="nav-link" href="#">
                  <i class="fa fa-bell"></i>
                  <span class="badge icon badge-pill badge-danger up">3</span>
                </a>
              </li>

              <li class="item size icon">
                <a class="nav-link" href="#">
                  <i class="fa fa-envelope"></i>
                  <span class="badge icon badge-pill badge-info up">5</span>
                </a>
              </li>

              <li class="item size avatar">
                <a class="nav-link" href="#">
                  <span>
                    Hi Binoy
                  </span>
                  <span class="online">
                    <img src="https://raw.githubusercontent.com/binoykr/react-admin-ui/new-dashboard/public/imgs/user-binoy.jpg"
                      alt="User picture" />
                    <i></i>
                  </span>
                </a>

                <div class="dropdown size style right">
                  <div class="header size">
                    <h5>Notifications</h5>
                    <span class="badge list badge-round badge-danger">New 5</span>
                  </div>
                  <div class="container">
                    <p>Content</p>
                  </div>
                  <div class="footer size">
                    <a class="item">All notifications</a>
                    <a class="item-button">
                      <i class="fa fa-cog"></i>
                    </a>
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