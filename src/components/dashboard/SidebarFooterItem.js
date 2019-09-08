import React from 'react';

class SidebarFooterItem extends React.Component {

    render() {
        var badge = "";
        var sonar = "";

        if (this.props.badge != null) {
            badge = <span class={"badge badge-pill " + this.props.badge.type + " notification"}>{this.props.badge.label}</span>;
        } else if (this.props.sonar != null && this.props.sonar) {
            badge = <span class="badge-sonar"></span>;
        }

        return (
            <a href="#">
                <i class={this.props.font}></i>
                
                {badge}

                {sonar}
                
            </a>);
    }
}

export default SidebarFooterItem;