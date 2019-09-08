import React from 'react';

class SidebarDropdown extends React.Component {

    render() {
        const childrens = React.Children.map(this.props.children, children =>
            React.cloneElement(children)
        );

        var badge = "";

        if (this.props.badge != null) {
            badge = <span class={"badge badge-pill " + this.props.badge.type}>{this.props.badge.label}</span>;
        }

        return (<div class="sidebar-menu">
            <ul>
                <li class="sidebar-dropdown">
                    <a href="#">
                        <i class={this.props.font}></i>
                        <span>{this.props.title}</span>

                        {badge}

                    </a>

                    <div class="sidebar-submenu">
                        <ul>
                            {childrens}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>);
    }
}

export default SidebarDropdown;