import React from 'react';

import './Dashboard.css'

class Dashboard extends React.Component {


  render() {
    const childrens = React.Children.map(this.props.children, children =>
      React.cloneElement(children)
    );

    return (
      <div class="page-wrapper chiller-theme toggled">
        
        <nav id="sidebar" class="sidebar-wrapper">

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

          </div>

        </main>

      </div >
    );
  }
}

export default Dashboard;