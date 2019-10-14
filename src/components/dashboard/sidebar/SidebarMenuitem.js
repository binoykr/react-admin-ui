import React from 'react';

class SidebarMenuitem extends React.Component {

    render() {
        var badge = "";
        var font = "";

        if (this.props.badge != null) {
            badge = <span class={"badge badge-pill " + this.props.badge.type}>{this.props.badge.label}</span>;
        }

        if (this.props.font != null) {
            font = <i class={this.props.font}></i>;
        }

        return (<li>
            <a href="#">
                {font}
                <span>{this.props.label}</span>
                {badge}
            </a>
        </li>);
    }
}

export default SidebarMenuitem;