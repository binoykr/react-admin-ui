import React from 'react';

class Sidemenubar extends React.Component {

    render() {
        const childrens = React.Children.map(this.props.children, children =>
            React.cloneElement(children)
        );

        return (<div class="sidebar-menu">
            <ul>
                {childrens}
            </ul>
        </div>);
    }
}

export default Sidemenubar;