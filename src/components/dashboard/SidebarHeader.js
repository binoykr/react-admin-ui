import React from 'react';

class SidebarHeader extends React.Component {

    render() {
        return (<li class="header-menu">
            <span>{this.props.title}</span>
        </li>);
    }
}

export default SidebarHeader;