import React from 'react';

class ToolbarDropdown extends React.Component {


  render() {
    const childrens = React.Children.map(this.props.children, children =>
      React.cloneElement(children)
    );

    var badge = "";

    if (this.props.badge != null) {
      badge = <span class={"badge icon badge-pill " + this.props.badge.type + " up"}>{this.props.badge.label}</span>;
    }

    return (
      <li class="nav-item dropdown" id={this.props.id} data-toggle="dropdown" aria-expanded="false">
        <a class="nav-link" href="#">

          <i class={this.props.icon}></i>

          {badge}

        </a>

        <div class="dropdown-menu dropdown-menu-right style-media" aria-labelledby={this.props.id}>
          <div class="dropdown-menu-container">

            {childrens}

          </div>
        </div>
      </li>

    );
  }
}

export default ToolbarDropdown;