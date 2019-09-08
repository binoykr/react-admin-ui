import React from 'react';
import './Dashboard.css'

class Dashboard extends React.Component {
  render() {
    return (
      <div class="page-wrapper chiller-theme toggled">
        <nav id="sidebar" class="sidebar-wrapper">

          <div class="sidebar-menu">
            <ul>

              <li class="sidebar-dropdown">

                <a href="#">
                  <i class="fa fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                  <span class="badge badge-pill badge-warning">New</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div >
    );
  }
}

export default Dashboard;