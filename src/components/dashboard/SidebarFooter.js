import React from 'react';

class SidebarFooter extends React.Component {

    render() {
        const childrens = React.Children.map(this.props.children, children =>
            React.cloneElement(children)
        );


        return (<div class="sidebar-footer">
            {childrens}
        </div>);
    }
}

export default SidebarFooter;


