import React from 'react';

import './Dashboard.css'

class Dashboard extends React.Component {


  render() {
    const childrens = React.Children.map(this.props.children, children =>
      React.cloneElement(children)
    );

    return (
      <div class="main-wrapper chiller-theme">
        <nav id="topbar" class="topbar-wrapper">

          <div class="topbar-content">

          </div>
        </nav>


        <div class="page-wrapper toggled">

          <nav id="sidebar" class="sidebar-wrapper">

          <div class="sidebar-brand">
                <a href="#">{this.props.title}</a>
            </div>

            <div class="sidebar-header">
                <div class="user-pic">
                    <img class="img-responsive img-rounded" src="https://raw.githubusercontent.com/binoykr/react-admin-ui/master/public/imgs/user.jpg"
                        alt="User picture" />
                </div>
                <div class="user-info">
                    <span class="user-name">{this.props.userInfo.firstname}
                        <strong>{this.props.userInfo.lastname}</strong>
                    </span>
                    <span class="user-role">{this.props.userInfo.designation}</span>

                    <span class={this.props.userInfo.status === "Online" ? "user-status online" : "user-status offline"}>
                        <i class="fa fa-circle"></i>
                        <span>{this.props.userInfo.status}</span>
                    </span>

                </div>
            </div>

            {childrens}

          </nav>

          <main class="page-content">

            <div class="container-fluid">

              <h2>React Admin UI</h2>
              <hr />
              <div class="row">
                <div class="form-group col-md-12">
                  <p>This is a sample admin react application </p>
                  <p> You can get code on <a href="https://github.com/binoykr/react-admin-ui" target="_blank">
                    Github</a></p>
                </div>
                <div class="form-group col-md-12">
                  Development going on.......!
              </div>
              </div>


              <div class="row">
                <div class="form-group col-md-12">
                  <p>This is a sample admin react application </p>
                  <p> You can get code on <a href="https://github.com/binoykr/react-admin-ui" target="_blank">
                    Github</a></p>
                </div>
                <div class="form-group col-md-12">
                  Development going on.......!
              </div>
              </div>


              <div class="row">
                <div class="form-group col-md-12">
                  <p>This is a sample admin react application </p>
                  <p> You can get code on <a href="https://github.com/binoykr/react-admin-ui" target="_blank">
                    Github</a></p>
                </div>
                <div class="form-group col-md-12">
                  Development going on.......!
              </div>
              </div>

              <div class="row">
                <div class="form-group col-md-12">
                  <p>This is a sample admin react application </p>
                  <p> You can get code on <a href="https://github.com/binoykr/react-admin-ui" target="_blank">
                    Github</a></p>
                </div>
                <div class="form-group col-md-12">
                  Development going on.......!
              </div>
              </div>

            </div>

          </main>

        </div >

      </div>
    );
  }
}

export default Dashboard;